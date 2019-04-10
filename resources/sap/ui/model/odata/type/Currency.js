/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/ui/model/type/Currency"],function(e,t,r){"use strict";var n=new Map,i=/\.(\d+)$/;function s(e,t){return sap.ui.getCore().getLibraryResourceBundle().getText(e,t)}var o=r.extend("sap.ui.model.odata.type.Currency",{constructor:function(e,t,n){if(e&&e["customCurrencies"]){throw new Error("Format option customCurrencies is not supported")}if(t){throw new Error("Constraints not supported")}if(arguments.length>2){throw new Error("Only the parameter oFormatOptions is supported")}this.bParseAsString=!e||!("parseAsString"in e)||e.parseAsString;e=Object.assign({},e,{parseAsString:true});r.call(this,e,t);this.bParseWithValues=true;this.setConstraints=function(){throw new Error("Constraints not supported")};this.setFormatOptions=function(){throw new Error("Format options are immutable")};this.mCustomCurrencies=undefined}});o.prototype.formatValue=function(e,t){var i=this;if(this.mCustomCurrencies===undefined&&e&&e[2]!==undefined){if(e[2]===null){this.mCustomCurrencies=null}else{this.mCustomCurrencies=n.get(e[2]);if(!this.mCustomCurrencies){this.mCustomCurrencies={};Object.keys(e[2]).forEach(function(t){i.mCustomCurrencies[t]={decimals:e[2][t].UnitSpecificScale,isoCode:e[2][t].StandardCode}});n.set(e[2],this.mCustomCurrencies)}r.prototype.setFormatOptions.call(this,Object.assign({customCurrencies:this.mCustomCurrencies},this.oFormatOptions))}}if(!e||e[0]===undefined||e[1]===undefined||this.mCustomCurrencies===undefined&&e[2]===undefined){return null}return r.prototype.formatValue.call(this,e.slice(0,2),t)};o.prototype.getInterface=function(){return this};o.prototype.getName=function(){return"sap.ui.model.odata.type.Currency"};o.prototype.parseValue=function(t,n,o){var u,a,c,p,m;if(this.mCustomCurrencies===undefined){throw new e("Cannot parse value without currency customizing")}m=r.prototype.parseValue.apply(this,arguments);u=m[1]||o[1];if(m[0].includes(".")){m[0]=m[0].replace(/0+$/,"").replace(/\.$/,"")}if(u&&this.mCustomCurrencies){p=i.exec(m[0]);c=p?p[1].length:0;a=this.mCustomCurrencies[u].decimals;if(c>a){throw new e(a?s("EnterNumberFraction",[a]):s("EnterInt"))}}if(!this.bParseAsString){m[0]=Number(m[0])}return m};o.prototype.validateValue=function(e){if(this.mCustomCurrencies===undefined){throw new t("Cannot validate value without currency customizing")}};return o});