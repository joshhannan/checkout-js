(window.webpackJsonpCheckout=window.webpackJsonpCheckout||[]).push([[4],{1636:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n(15),a=n(0),i=n.n(a),o=n(1625),d=n(1521),c=n(425),l=n(1436),u=n(426),g=n(1574),m=n(1466),h=n(1458),p=n(1629);function b(e){var t=Object(p.a)(e);return t&&["amazonpay"].indexOf(t.providerId)>-1?t.providerId:void 0}var f=n(114),A=n(70),v=n(1626),C=n(1627),O=n(1635),_=n(656),y=n(654),j=n(655),E=n(314),S=n(1628),w=n(1457),k=n(1464),F=n(1465),U=n(1444),z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isResettingAddress:!1},t.addressFormRef=Object(a.createRef)(),t.handleSelectAddress=function(e){return Object(s.__awaiter)(t,void 0,void 0,(function(){var t,n,r,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:t=this.props,n=t.updateAddress,r=t.onUnhandledError,this.setState({isResettingAddress:!0}),s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,n(e)];case 2:return s.sent(),[3,5];case 3:return a=s.sent(),r(a),[3,5];case 4:return this.setState({isResettingAddress:!1}),[7];case 5:return[2]}}))}))},t.handleUseNewAddress=function(){t.handleSelectAddress({})},t}return Object(s.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.googleMapsApiKey,n=e.billingAddress,s=e.countriesWithAutocomplete,r=e.customer,a=r.addresses,o=r.isGuest,d=e.getFields,c=e.countries,l=e.isUpdating,g=e.setFieldValue,m=e.shouldShowOrderComments,p=e.values,b="amazonpay"===e.methodId,f=d(p.countryCode),A=f.filter((function(e){return e.custom})),_=A.length>0,y=b&&_?A:f,j=this.state.isResettingAddress,E=a&&a.length>0,z=n&&Object(v.a)(n,a,d(n.countryCode));return i.a.createElement(k.a,{autoComplete:"on"},b&&n&&i.a.createElement("div",{className:"form-fieldset"},i.a.createElement(U.a,{address:n})),i.a.createElement(F.a,{id:"checkoutBillingAddress",ref:this.addressFormRef},E&&!b&&i.a.createElement(F.a,{id:"billingAddresses"},i.a.createElement(h.a,{isLoading:j},i.a.createElement(C.a,{addresses:a,onSelectAddress:this.handleSelectAddress,onUseNewAddress:this.handleUseNewAddress,selectedAddress:z?n:void 0}))),!z&&i.a.createElement(h.a,{isLoading:j},i.a.createElement(O.a,{countries:c,countriesWithAutocomplete:s,countryCode:p.countryCode,formFields:y,googleMapsApiKey:t,setFieldValue:g,shouldShowSaveAddress:!o}))),m&&i.a.createElement(S.a,null),i.a.createElement("div",{className:"form-actions"},i.a.createElement(w.c,{disabled:l||j,id:"checkout-billing-continue",isLoading:l||j,type:"submit",variant:w.b.Primary},i.a.createElement(u.a,{id:"common.continue_action"}))))},t}(a.PureComponent),I=Object(E.a)(Object(f.withFormik)({handleSubmit:function(e,t){(0,t.props.onSubmit)(e)},mapPropsToValues:function(e){var t=e.getFields,n=e.customerMessage,r=e.billingAddress;return Object(s.__assign)(Object(s.__assign)({},Object(_.a)(t(r&&r.countryCode),r)),{orderComment:n})},isInitialValid:function(e){var t=e.billingAddress,n=e.getFields,s=e.language;return!!t&&Object(y.a)({language:s,formFields:n(t.countryCode)}).isValidSync(t)},validationSchema:function(e){var t=e.language,n=e.getFields;return"amazonpay"===e.methodId?Object(A.lazy)((function(e){return Object(j.a)({language:t,formFields:n(e&&e.countryCode)})})):Object(A.lazy)((function(e){return Object(y.a)({language:t,formFields:n(e&&e.countryCode)})}))},enableReinitialize:!0})(z)),M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){return Object(s.__awaiter)(t,void 0,void 0,(function(){var t,n,r,a,i,c,l,u,g,m,h=e.orderComment,p=Object(s.__rest)(e,["orderComment"]);return Object(s.__generator)(this,(function(e){switch(e.label){case 0:t=this.props,n=t.updateAddress,r=t.updateCheckout,a=t.customerMessage,i=t.billingAddress,c=t.navigateNextStep,l=t.onUnhandledError,u=[],(g=Object(o.a)(p))&&!Object(d.a)(g,i)&&u.push(n(g)),a!==h&&u.push(r({customerMessage:h})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Promise.all(u)];case 2:return e.sent(),c(),[3,4];case 3:return m=e.sent(),l(m),[3,4];case 4:return[2]}}))}))},t}return Object(s.__extends)(t,e),t.prototype.componentDidMount=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,t,n,a,i,o;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:e=this.props,t=e.initialize,n=e.onReady,a=void 0===n?r.noop:n,i=e.onUnhandledError,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,t()];case 2:return s.sent(),a(),[3,4];case 3:return o=s.sent(),i(o),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this.props,t=e.updateAddress,n=e.isInitializing,r=Object(s.__rest)(e,["updateAddress","isInitializing"]);return i.a.createElement("div",{className:"checkout-form"},i.a.createElement("div",{className:"form-legend-container"},i.a.createElement(m.a,{testId:"billing-address-heading"},i.a.createElement(u.a,{id:"billing.billing_address_heading"}))),i.a.createElement(h.a,{isLoading:n,unmountContentWhenLoading:!0},i.a.createElement(I,Object(s.__assign)({},r,{onSubmit:this.handleSubmit,updateAddress:t}))))},t}(a.Component);t.default=Object(c.a)((function(e){var t=e.checkoutService,n=e.checkoutState,s=n.data,r=s.getCheckout,a=s.getConfig,i=s.getCart,o=s.getCustomer,d=s.getBillingAddress,c=s.getBillingAddressFields,u=s.getBillingCountries,m=n.statuses,h=m.isLoadingBillingCountries,p=m.isUpdatingBillingAddress,f=m.isUpdatingCheckout,A=a(),v=o(),C=r(),O=i();if(!(A&&v&&C&&O))return null;var _=A.checkoutSettings,y=_.enableOrderComments,j=_.googleMapsApiKey,E=["US","CA","AU","NZ"];return _.features["CHECKOUT-4183.checkout_google_address_autocomplete_uk"]&&E.push("GB"),{billingAddress:d(),countries:u()||l.a,countriesWithAutocomplete:E,customer:v,customerMessage:C.customerMessage,getFields:c,googleMapsApiKey:j,initialize:t.loadBillingAddressFields,isInitializing:h(),isUpdating:p()||f(),methodId:b(C),shouldShowOrderComments:y&&Object(g.a)(O)<1,updateAddress:t.updateBillingAddress,updateCheckout:t.updateCheckout}}))(M)}}]);
//# sourceMappingURL=billing-60569e53.js.map