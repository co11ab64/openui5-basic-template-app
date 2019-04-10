/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library"],function(e){"use strict";var r=e.Priority;var t={};var i="sapMNLG";var a="sapMNLB";var s="sapMLIB";var n="sapMNLB-AuthorPicture";var o="sapMNLG-GroupHeader";var d="sapMNLB-Header";var l="sapMNLG-Header";var u="sapMNLG-Body";var v="sapMNLB-SubHeader";var w="sapMNLG-SubHeader";var c="sapMNLB-CloseButton";var f="sapMNLB-Priority";var C="sapMNLG-Details";var N="sapMNLB-Bullet";var p="sapMNLG-Description";var g="sapMNLG-Collapsed";var h="sapMNLGNoHdrFooter";var b="sapMNLG-MaxNotifications";var M="sapMNLG-NoNotifications";t.render=function(e,r){if(r.getVisible()){var t=r._getVisibleItemsCount();var n=r.getShowEmptyGroup()||t>0;e.write("<li");e.addClass(i);e.addClass(a);e.addClass(s);if(!n){e.addClass(h)}if(r.getCollapsed()){e.addClass(g)}if(t==0){e.addClass(M)}e.writeClasses();e.writeControlData(r);e.writeAttribute("tabindex","0");e.writeAccessibilityState(r,{labelledby:r._ariaLabbeledByIds});e.write(">");if(n){e.write("<div");e.addClass(o);e.writeClasses();e.write(">");this.renderHeader(e,r);this.renderSubHeader(e,r);e.write("</div>");this.renderBody(e,r)}e.write("</li>")}else{this.renderInvisibleItem(e,r)}};t.renderHeader=function(e,r){e.write("<div");e.addClass(d);e.addClass(l);e.writeClasses();e.write(">");this.renderInvisibleInfoText(e,r);this.renderPriorityArea(e,r);this.renderCloseButton(e,r);this.renderTitle(e,r);e.write("</div>");this.renderDetails(e,r)};t.renderTitle=function(e,r){e.renderControl(r._getHeaderTitle())};t.renderCloseButton=function(e,r){if(r.getShowCloseButton()){e.renderControl(r.getAggregation("_closeButton").addStyleClass(c))}};t.renderAuthorPicture=function(e,r){if(!r.getAuthorPicture()){return}e.write("<div");e.addClass(n);e.writeClasses();e.write(">");e.renderControl(r._getAuthorImage());e.write("</div>")};t.renderDetails=function(e,r){e.write('<div class="'+C+'">');this.renderPriorityArea(e,r);this.renderAuthorPicture(e,r);e.write('<div class="'+p+'">');this.renderAuthorName(e,r);if(r.getAuthorName()!=""&&r.getDatetime()!=""){e.write('<span class="'+N+'">&#x00B7</span>')}this.renderDatetime(e,r);e.write("</div></div>")};t.renderInvisibleInfoText=function(e,r){e.renderControl(r.getAggregation("_ariaDetailsText"))};t.renderAuthorName=function(e,r){e.renderControl(r._getAuthorName())};t.renderSubHeader=function(e,r){var t=r.getButtons();e.write("<div");e.addClass(w);e.addClass(v);e.writeClasses();e.write(">");this.renderPriorityArea(e,r);this.renderCollapseGroupButton(e,r);if(t&&t.length&&r.getShowButtons()){e.renderControl(r.getAggregation("_overflowToolbar"))}e.write("</div>")};t.renderPriorityArea=function(e,t){e.write("<div");var i="";var a=t.getPriority();switch(a){case r.Low:i="sapMNLB-Low";break;case r.Medium:i="sapMNLB-Medium";break;case r.High:i="sapMNLB-High";break;default:i="sapMNLB-None";break}e.addClass(f);e.addClass(i);e.writeClasses();e.write(">");e.write("</div>")};t.renderCollapseGroupButton=function(e,r){e.renderControl(r.getAggregation("_collapseButton"))};t.renderInvisibleItem=function(e,r){e.write("<li");e.writeInvisiblePlaceholderData(r);e.write(">");e.write("</li>")};t.renderBody=function(e,r){e.write("<ul class="+u+">");this.renderNotifications(e,r);if(r._maxNumberReached){this.renderMaxNumberReachedMessage(e,r)}e.write("</ul>")};t.renderDatetime=function(e,r){e.renderControl(r._getDateTimeText())};t.renderNotifications=function(e,r){var t=r.getItems();var i=t.length;if(i){for(var a=0;a<r._maxNumberOfNotifications;a++){e.renderControl(t[a])}}};t.renderMaxNumberReachedMessage=function(e,r){var t="<span>"+r._maxNumberOfNotificationsTitle+"</span> <br>"+r._maxNumberOfNotificationsBody;e.write("<div");e.addClass(b);e.writeClasses();e.write(">");e.write(t);e.write("</div>")};return t},true);