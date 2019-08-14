import { createCheckoutService, createEmbeddedCheckoutMessenger, CheckoutSelectors, CheckoutService, EmbeddedCheckoutMessenger } from '@bigcommerce/checkout-sdk';
import { mount, ReactWrapper } from 'enzyme';
import React, { FunctionComponent } from 'react';

import { NoopStepTracker, StepTracker } from '../analytics';
import { CheckoutProvider } from '../checkout';
import { ErrorLoggerFactory } from '../common/error';
import { getStoreConfig } from '../config/config.mock';
import { createEmbeddedCheckoutStylesheet } from '../embeddedCheckout';
import { CreatedCustomer } from '../guestSignup';
import { LoadingSpinner } from '../ui/loading';

import { getOrder } from './orders.mock';
import OrderConfirmation, { OrderConfirmationProps } from './OrderConfirmation';
import OrderStatus from './OrderStatus';
import OrderSummary from './OrderSummary';
import OrderSummaryDrawer from './OrderSummaryDrawer';
import ThankYouHeader from './ThankYouHeader';

describe('OrderConfirmation', () => {
    let checkoutService: CheckoutService;
    let checkoutState: CheckoutSelectors;
    let defaultProps: OrderConfirmationProps;
    let stepTracker: StepTracker;
    let ComponentTest: FunctionComponent<OrderConfirmationProps>;
    let embeddedMessengerMock: EmbeddedCheckoutMessenger;
    let orderConfirmation: ReactWrapper;

    beforeEach(() => {
        checkoutService = createCheckoutService();
        checkoutState = checkoutService.getState();
        stepTracker = new NoopStepTracker();
        embeddedMessengerMock = createEmbeddedCheckoutMessenger({ parentOrigin: getStoreConfig().links.siteLink });

        jest.spyOn(checkoutService, 'loadOrder')
            .mockResolvedValue(checkoutState);

        jest.spyOn(checkoutState.statuses, 'isLoadingOrder')
            .mockReturnValue(true);

        jest.spyOn(checkoutState.data, 'getOrder')
            .mockReturnValue(getOrder());

        jest.spyOn(checkoutState.data, 'getConfig')
            .mockReturnValue(getStoreConfig());

        jest.spyOn(stepTracker, 'trackOrderComplete');

        defaultProps = {
            containerId: 'app',
            createAccount: jest.fn(() => Promise.resolve({} as CreatedCustomer)),
            createEmbeddedMessenger: () => embeddedMessengerMock,
            createStepTracker: () => stepTracker,
            embeddedStylesheet: createEmbeddedCheckoutStylesheet(),
            errorLogger: new ErrorLoggerFactory().getLogger(),
            orderId: 105,
        };

        ComponentTest = props => (
            <CheckoutProvider checkoutService={ checkoutService }>
                <OrderConfirmation { ...props } />
            </CheckoutProvider>
        );
    });

    it('calls trackOrderComplete when config is ready', async () => {
        jest.spyOn(checkoutState.data, 'getConfig')
            .mockReturnValue(undefined);

        const component = mount(<ComponentTest { ...defaultProps } />);

        component.setProps({ config: {} });
        component.update();

        await new Promise(resolve => process.nextTick(resolve));

        expect(stepTracker.trackOrderComplete)
            .toHaveBeenCalled();
    });

    it('loads passed order ID', () => {
        orderConfirmation = mount(<ComponentTest { ...defaultProps } />);

        expect(orderConfirmation.find(LoadingSpinner).prop('isLoading')).toBeTruthy();
        expect(checkoutService.loadOrder).toHaveBeenCalledWith(105);
    });

    it('posts message to parent of embedded checkout when order is loaded', async () => {
        jest.spyOn(embeddedMessengerMock, 'postFrameLoaded')
            .mockImplementation();

        mount(<ComponentTest { ...defaultProps } />);

        await new Promise(resolve => process.nextTick(resolve));

        expect(embeddedMessengerMock.postFrameLoaded)
            .toHaveBeenCalledWith({ contentId: defaultProps.containerId });
    });

    it('attaches additional styles for embedded checkout', async () => {
        const styles = { text: { color: '#000' } };

        jest.spyOn(embeddedMessengerMock, 'receiveStyles')
            .mockImplementation(fn => fn(styles));

        jest.spyOn(defaultProps.embeddedStylesheet, 'append')
            .mockImplementation();

        mount(<ComponentTest { ...defaultProps } />);

        await new Promise(resolve => process.nextTick(resolve));

        expect(defaultProps.embeddedStylesheet.append)
            .toHaveBeenCalledWith(styles);
    });

    it('renders confirmation page once loading is finished', async () => {
        jest.spyOn(checkoutState.statuses, 'isLoadingOrder')
            .mockReturnValue(false);

        orderConfirmation = mount(<ComponentTest { ...defaultProps } />);

        await new Promise(resolve => process.nextTick(resolve));

        orderConfirmation.update();

        expect(orderConfirmation.find(LoadingSpinner).length).toEqual(0);
        expect(orderConfirmation.find('.orderConfirmation').length).toEqual(1);
        expect(orderConfirmation.find(OrderStatus).length).toEqual(1);
        expect(orderConfirmation.find(ThankYouHeader).length).toEqual(1);
        expect(orderConfirmation.find(OrderSummaryDrawer).length).toEqual(1);
        expect(orderConfirmation.find(OrderSummary).length).toEqual(1);
        expect(orderConfirmation.find('[data-test="payment-instructions"]')).toMatchSnapshot();
    });

    it('renders continue shopping button', () => {
        jest.spyOn(checkoutState.statuses, 'isLoadingOrder')
            .mockReturnValue(false);

        orderConfirmation = mount(<ComponentTest { ...defaultProps } />);

        expect(orderConfirmation.find('.continueButtonContainer a').prop('href'))
            .toEqual(getStoreConfig().links.siteLink);
    });
});
