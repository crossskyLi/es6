var razor = {/* Element Chalk Variables */

  // Special comment for theme configurator
  // type|skipAutoTranslation|Category|Order
  // skipAutoTranslation 1

  /* Transition
  -------------------------- */
  "$--all-transition": " all .3s cubic-bezier(.645,.045,.355,1) !default",
  "$--fade-transition": " opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default",
  "$--fade-linear-transition": " opacity 200ms linear !default",
  "$--md-fade-transition": " transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default",
  "$--border-transition-base": " border-color .2s cubic-bezier(.645,.045,.355,1) !default",
  "$--color-transition-base": " color .2s cubic-bezier(.645,.045,.355,1) !default",

  /* Color
  -------------------------- */
  // color|1|BrandColor|0
  "$--color-primary": " rgb(43, 58, 73) !default",
  // color|1|BackgroundColor|4
  "$--color-white": " #FFFFFF !default",
  // color|1|BackgroundColor|4
  "$--color-black": " #000000 !default",
  "$--color-primary-light-1": " mix($--color-white, $--color-primary, 10%) !default", /* 53a8ff */
  "$--color-primary-light-2": " mix($--color-white, $--color-primary, 20%) !default", /* 66b1ff */
  "$--color-primary-light-3": " mix($--color-white, $--color-primary, 30%) !default", /* 79bbff */
  "$--color-primary-light-4": " mix($--color-white, $--color-primary, 40%) !default", /* 8cc5ff */
  "$--color-primary-light-5": " mix($--color-white, $--color-primary, 50%) !default", /* a0cfff */
  "$--color-primary-light-6": " mix($--color-white, $--color-primary, 60%) !default", /* b3d8ff */
  "$--color-primary-light-7": " mix($--color-white, $--color-primary, 70%) !default", /* c6e2ff */
  "$--color-primary-light-8": " mix($--color-white, $--color-primary, 80%) !default", /* d9ecff */
  "$--color-primary-light-9": " mix($--color-white, $--color-primary, 90%) !default", /* ecf5ff */
  // color|1|SecondaryColor|1
  "$--color-success": " #67C23A !default",
  // color|1|SecondaryColor|1
  "$--color-warning": " #E6A23C !default",
  // color|1|SecondaryColor|1
  "$--color-danger": " #F56C6C !default",
  // color|1|SecondaryColor|1
  "$--color-info": " #909399 !default",

  "$--color-success-light": " mix($--color-white, $--color-success, 80%) !default",
  "$--color-warning-light": " mix($--color-white, $--color-warning, 80%) !default",
  "$--color-danger-light": " mix($--color-white, $--color-danger, 80%) !default",
  "$--color-info-light": " mix($--color-white, $--color-info, 80%) !default",

  "$--color-success-lighter": " mix($--color-white, $--color-success, 90%) !default",
  "$--color-warning-lighter": " mix($--color-white, $--color-warning, 90%) !default",
  "$--color-danger-lighter": " mix($--color-white, $--color-danger, 90%) !default",
  "$--color-info-lighter": " mix($--color-white, $--color-info, 90%) !default",
  // color|1|FontColor|2
  "$--color-text-primary": " #303133 !default",
  // color|1|FontColor|2
  "$--color-text-regular": " #606266 !default",
  // color|1|FontColor|2
  "$--color-text-secondary": " #909399 !default",
  // color|1|FontColor|2
  "$--color-text-placeholder": " #C0C4CC !default",
  // color|1|BorderColor|3
  "$--border-color-base": " #DCDFE6 !default",
  // color|1|BorderColor|3
  "$--border-color-light": " #E4E7ED !default",
  // color|1|BorderColor|3
  "$--border-color-lighter": " #EBEEF5 !default",
  // color|1|BorderColor|3
  "$--border-color-extra-light": " #F2F6FC !default",

  // Background
  // color|1|BackgroundColor|4
  "$--background-color-base": " #f5f7fa !default",

  /* Link------------------------- */
  "$--link-color": " $--color-primary-light-2 !default",
  "$--link-hover-color": " $--color-primary !default",

  /* Border------------------------- */
  "$--border-width-base": " 1px !default",
  "$--border-style-base": " solid !default",
  "$--border-color-hover": " $--color-text-placeholder !default",
  "$--border-base": " $--border-width-base $--border-style-base $--border-color-base !default",
  // borderRadius|1|Radius|0
  "$--border-radius-base": " 4px !default",
  // borderRadius|1|Radius|0
  "$--border-radius-small": " 2px !default",
  // borderRadius|1|Radius|0
  "$--border-radius-circle": " 100% !default",

  // Box-shadow
  // boxShadow|1|Shadow|1
  "$--box-shadow-base": " 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) !default",
  /* boxShadow | 1 | Shadow | 1-- */
  "$--box-shadow-dark": " 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12) !default",
  // boxShadow|1|Shadow|1
  "$--box-shadow-light": " 0 2px 12px 0 rgba(0, 0, 0, 0.1) !default",

  /* Fil------------------------- */
  "$--fill-base": " $--color-white !default",

  /* Typograph------------------------- */
  "$--font-path": " 'fonts' !default",
  // fontSize|1|FontSize|0
  "$--font-size-extra-large": " 20px !default",
  // fontSize|1|FontSize|0
  "$--font-size-large": " 18px !default",
  // fontSize|1|FontSize|0
  "$--font-size-medium": " 16px !default",
  // fontSize|1|FontSize|0
  "$--font-size-base": " 14px !default",
  // fontSize|1|FontSize|0
  "$--font-size-small": " 13px !default",
  // fontSize|1|FontSize|0
  "$--font-size-extra-small": " 12px !default",
  // fontWeight|1|FontWeight|1
  "$--font-weight-primary": " 500 !default",
  // fontWeight|1|FontWeight|1
  "$--font-weight-secondary": " 100 !default",
  // fontLineHeight|1|LineHeight|2
  "$--font-line-height-primary": " 24px !default",
  // fontLineHeight|1|LineHeight|2
  "$--font-line-height-secondary": " 16px !default",
  "$--font-color-disabled-base": " #bbb !default",
  /* Siz------------------------- */
  "$--size-base": " 14px !default",

  /* z-inde------------------------- */
  "$--index-normal": " 1 !default",
  "$--index-top": " 1000 !default",
  "$--index-popper": " 2000 !default",

  /* Disable bas------------------------- */
  "$--disabled-fill-base": " $--background-color-base !default",
  "$--disabled-color-base": " $--color-text-placeholder !default",
  "$--disabled-border-base": " $--border-color-light !default",

  /* Ico------------------------- */
  "$--icon-color": " #666 !default",
  "$--icon-color-base": " $--color-info !default",

  /* Checkbo------------------------- */
  // fontSize||Font|1
  "$--checkbox-font-size": " 14px !default",
  // fontWeight||Font|1
  "$--checkbox-font-weight": " $--font-weight-primary !default",
  // color||Color|0
  "$--checkbox-font-color": " $--color-text-regular !default",
  "$--checkbox-input-height": " 14px !default",
  "$--checkbox-input-width": " 14px !default",
  // borderRadius||Border|2
  "$--checkbox-input-border-radius": " $--border-radius-small !default",
  // color||Color|0
  "$--checkbox-input-background-color": " $--color-white !default",
  "$--checkbox-input-border": " $--border-base !default",
  // color||Color|0
  "$--checkbox-input-border-color": " $--border-color-base !default",
  // color||Color|0
  "$--checkbox-icon-color": " $--color-white !default",

  // color||Color|0
  "$--checkbox-disabled-input-border-color": " $--border-color-base !default",
  "$--checkbox-disabled-input-fill": " #edf2fc !default",
  "$--checkbox-disabled-icon-color": " $--color-text-placeholder !default",

  "$--checkbox-disabled-checked-input-fill": " $--border-color-extra-light !default",
  "$--checkbox-disabled-checked-input-border-color": " $--border-color-base !default",
  "$--checkbox-disabled-checked-icon-color": " $--color-text-placeholder !default",

  // color||Color|0
  "$--checkbox-checked-font-color": " $--color-primary !default",
  "$--checkbox-checked-input-border-color": " $--color-primary !default",
  // color||Color|0
  "$--checkbox-checked-input-background-color": " $--color-primary !default",
  "$--checkbox-checked-icon-color": " $--fill-base !default",

  "$--checkbox-input-border-color-hover": " $--color-primary !default",
  // height||Other|4
  "$--checkbox-bordered-height": " 40px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-padding": " 9px 20px 9px 10px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-medium-padding": " 7px 20px 7px 10px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-small-padding": " 5px 15px 5px 10px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-mini-padding": " 3px 15px 3px 10px !default",
  "$--checkbox-bordered-medium-input-height": " 14px !default",
  "$--checkbox-bordered-medium-input-width": " 14px !default",
  // height||Other|4
  "$--checkbox-bordered-medium-height": " 36px !default",
  "$--checkbox-bordered-small-input-height": " 12px !default",
  "$--checkbox-bordered-small-input-width": " 12px !default",
  // height||Other|4
  "$--checkbox-bordered-small-height": " 32px !default",
  "$--checkbox-bordered-mini-input-height": " 12px !default",
  "$--checkbox-bordered-mini-input-width": " 12px !default",
  // height||Other|4
  "$--checkbox-bordered-mini-height": " 28px !default",

  // fontSize||Font|1
  "$--checkbox-button-font-size": " $--font-size-base !default",
  // color||Color|0
  "$--checkbox-button-checked-background-color": " $--color-primary !default",
  // color||Color|0
  "$--checkbox-button-checked-font-color": " $--color-white !default",
  // color||Color|0
  "$--checkbox-button-checked-border-color": " $--color-primary !default",

  /* Radi------------------------- */
  // fontSize||Font|1
  "$--radio-font-size": " $--font-size-base !default",
  // fontWeight||Font|1
  "$--radio-font-weight": " $--font-weight-primary !default",
  // color||Color|0
  "$--radio-font-color": " $--color-text-regular !default",
  "$--radio-input-height": " 14px !default",
  "$--radio-input-width": " 14px !default",
  // borderRadius||Border|2
  "$--radio-input-border-radius": " $--border-radius-circle !default",
  // color||Color|0
  "$--radio-input-background-color": " $--color-white !default",
  "$--radio-input-border": " $--border-base !default",
  // color||Color|0
  "$--radio-input-border-color": " $--border-color-base !default",
  // color||Color|0
  "$--radio-icon-color": " $--color-white !default",

  "$--radio-disabled-input-border-color": " $--disabled-border-base !default",
  "$--radio-disabled-input-fill": " $--disabled-fill-base !default",
  "$--radio-disabled-icon-color": " $--disabled-fill-base !default",

  "$--radio-disabled-checked-input-border-color": " $--disabled-border-base !default",
  "$--radio-disabled-checked-input-fill": " $--disabled-fill-base !default",
  "$--radio-disabled-checked-icon-color": " $--color-text-placeholder !default",

  // color||Color|0
  "$--radio-checked-font-color": " $--color-primary !default",
  // color||Color|0
  "$--radio-checked-input-border-color": " $--color-primary !default",
  // color||Color|0
  "$--radio-checked-input-background-color": " $--color-white !default",
  // color||Color|0
  "$--radio-checked-icon-color": " $--color-primary !default",

  "$--radio-input-border-color-hover": " $--color-primary !default",

  "$--radio-bordered-height": " 40px !default",
  "$--radio-bordered-padding": " 12px 20px 0 10px !default",
  "$--radio-bordered-medium-padding": " 10px 20px 0 10px !default",
  "$--radio-bordered-small-padding": " 8px 15px 0 10px !default",
  "$--radio-bordered-mini-padding": " 6px 15px 0 10px !default",
  "$--radio-bordered-medium-input-height": " 14px !default",
  "$--radio-bordered-medium-input-width": " 14px !default",
  "$--radio-bordered-medium-height": " 36px !default",
  "$--radio-bordered-small-input-height": " 12px !default",
  "$--radio-bordered-small-input-width": " 12px !default",
  "$--radio-bordered-small-height": " 32px !default",
  "$--radio-bordered-mini-input-height": " 12px !default",
  "$--radio-bordered-mini-input-width": " 12px !default",
  "$--radio-bordered-mini-height": " 28px !default",

  // fontSize||Font|1
  "$--radio-button-font-size": " $--font-size-base !default",
  // color||Color|0
  "$--radio-button-checked-background-color": " $--color-primary !default",
  // color||Color|0
  "$--radio-button-checked-font-color": " $--color-white !default",
  // color||Color|0
  "$--radio-button-checked-border-color": " $--color-primary !default",
  "$--radio-button-disabled-checked-fill": " $--border-color-extra-light !default",

  /* Selec------------------------- */
  "$--select-border-color-hover": " $--border-color-hover !default",
  "$--select-disabled-border": " $--disabled-border-base !default",
  // fontSize||Font|1
  "$--select-font-size": " $--font-size-base !default",
  "$--select-close-hover-color": " $--color-text-secondary !default",

  "$--select-input-color": " $--color-text-placeholder !default",
  "$--select-multiple-input-color": " #666 !default",
  // color||Color|0
  "$--select-input-focus-border-color": " $--color-primary !default",
  // fontSize||Font|1
  "$--select-input-font-size": " 14px !default",

  "$--select-option-color": " $--color-text-regular !default",
  "$--select-option-disabled-color": " $--color-text-placeholder !default",
  "$--select-option-disabled-background": " $--color-white !default",
  // height||Other|4
  "$--select-option-height": " 34px !default",
  "$--select-option-hover-background": " $--background-color-base !default",
  // color||Color|0
  "$--select-option-selected-font-color": " $--color-primary !default",
  "$--select-option-selected-hover": " $--background-color-base !default",

  "$--select-group-color": " $--color-info !default",
  // height||Other|4
  "$--select-group-height": " 30px !default",
  "$--select-group-font-size": " 12px !default",

  "$--select-dropdown-background": " $--color-white !default",
  "$--select-dropdown-shadow": " $--box-shadow-light !default",
  "$--select-dropdown-empty-color": " #999 !default",
  // height||Other|4
  "$--select-dropdown-max-height": " 274px !default",
  // padding||Spacing|3
  "$--select-dropdown-padding": " 6px 0 !default",
  "$--select-dropdown-empty-padding": " 10px 0 !default",
  "$--select-dropdown-border": " solid 1px $--border-color-light !default",

  /* Aler------------------------- */
  "$--alert-padding": " 8px 16px !default",
  "$--alert-border-radius": " $--border-radius-base !default",
  "$--alert-title-font-size": " 13px !default",
  "$--alert-description-font-size": " 12px !default",
  "$--alert-close-font-size": " 12px !default",
  "$--alert-close-customed-font-size": " 13px !default",

  "$--alert-success-color": " $--color-success-lighter !default",
  "$--alert-info-color": " $--color-info-lighter !default",
  "$--alert-warning-color": " $--color-warning-lighter !default",
  "$--alert-danger-color": " $--color-danger-lighter !default",

  "$--alert-icon-size": " 16px !default",
  "$--alert-icon-large-size": " 28px !default",

  /* Message Bo------------------------- */
  "$--msgbox-width": " 420px !default",
  "$--msgbox-border-radius": " 4px !default",
  "$--msgbox-font-size": " $--font-size-large !default",
  "$--msgbox-content-font-size": " $--font-size-base !default",
  "$--msgbox-content-color": " $--color-text-regular !default",
  "$--msgbox-error-font-size": " 12px !default",
  "$--msgbox-padding-primary": " 15px !default",

  "$--msgbox-success-color": " $--color-success !default",
  "$--msgbox-info-color": " $--color-info !default",
  "$--msgbox-warning-color": " $--color-warning !default",
  "$--msgbox-danger-color": " $--color-danger !default",

  /* Messag------------------------- */
  "$--message-shadow": " $--box-shadow-base !default",
  "$--message-min-width": " 380px !default",
  "$--message-background-color": " #edf2fc !default",
  "$--message-padding": " 15px 15px 15px 20px !default",
  "$--message-content-color": " $--color-text-regular !default",
  "$--message-close-color": " $--color-text-placeholder !default",
  "$--message-close-size": " 16px !default",
  "$--message-close-hover-color": " $--color-text-secondary !default",

  "$--message-success-color": " $--color-success !default",
  "$--message-info-color": " $--color-info !default",
  "$--message-warning-color": " $--color-warning !default",
  "$--message-danger-color": " $--color-danger !default",

  /* Notificatio------------------------- */
  "$--notification-width": " 330px !default",
  "$--notification-padding": " 14px 26px 14px 13px !default",
  "$--notification-radius": " 8px !default",
  "$--notification-shadow": " $--box-shadow-light !default",
  "$--notification-border-color": " $--border-color-lighter !default",
  "$--notification-icon-size": " 24px !default",
  "$--notification-close-font-size": " $--message-close-size !default",
  "$--notification-group-margin": " 13px !default",
  "$--notification-font-size": " $--font-size-base !default",
  "$--notification-color": " $--color-text-regular !default",
  "$--notification-title-font-size": " 16px !default",
  "$--notification-title-color": " $--color-text-primary !default",

  "$--notification-close-color": " $--color-text-secondary !default",
  "$--notification-close-hover-color": " $--color-text-regular !default",

  "$--notification-success-color": " $--color-success !default",
  "$--notification-info-color": " $--color-info !default",
  "$--notification-warning-color": " $--color-warning !default",
  "$--notification-danger-color": " $--color-danger !default",

  /* Inpu------------------------- */
  // fontSize||Font|1
  "$--input-font-size": " $--font-size-base !default",
  // color||Color|0
  "$--input-font-color": " $--color-text-regular !default",
  // height||Other|4
  "$--input-width": " 140px !default",
  // height||Other|4
  "$--input-height": " 40px !default",
  "$--input-border": " $--border-base !default",
  "$--input-border-color": " $--border-color-base !default",
  // borderRadius||Border|2
  "$--input-border-radius": " $--border-radius-base !default",
  "$--input-border-color-hover": " $--border-color-hover !default",
  // color||Color|0
  "$--input-background-color": " $--color-white !default",
  "$--input-fill-disabled": " $--disabled-fill-base !default",
  "$--input-color-disabled": " $--font-color-disabled-base !default",
  // color||Color|0
  "$--input-icon-color": " $--color-text-placeholder !default",
  // color||Color|0
  "$--input-placeholder-color": " $--color-text-placeholder !default",
  "$--input-max-width": " 314px !default",

  "$--input-hover-border": " $--border-color-hover !default",
  "$--input-clear-hover-color": " $--color-text-secondary !default",

  "$--input-focus-border": " $--color-primary !default",
  "$--input-focus-fill": " $--color-white !default",

  "$--input-disabled-fill": " $--disabled-fill-base !default",
  "$--input-disabled-border": " $--disabled-border-base !default",
  "$--input-disabled-color": " $--disabled-color-base !default",
  "$--input-disabled-placeholder-color": " $--color-text-placeholder !default",

  // fontSize||Font|1
  "$--input-medium-font-size": " 14px !default",
  // height||Other|4
  "$--input-medium-height": " 36px !default",
  // fontSize||Font|1
  "$--input-small-font-size": " 13px !default",
  // height||Other|4
  "$--input-small-height": " 32px !default",
  // fontSize||Font|1
  "$--input-mini-font-size": " 12px !default",
  // height||Other|4
  "$--input-mini-height": " 28px !default",

  /* Cascade------------------------- */
  // color||Color|0
  "$--cascader-menu-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--cascader-menu-selected-font-color": " $--color-primary !default",
  "$--cascader-menu-fill": " $--fill-base !default",
  // fontSize||Font|1
  "$--cascader-menu-font-size": " $--font-size-base !default",
  // borderRadius||Border|2
  "$--cascader-menu-radius": " $--border-radius-base !default",
  "$--cascader-menu-border": " $--border-base !default",
  // color||Color|0
  "$--cascader-menu-border-color": " $--border-color-base !default",
  "$--cascader-menu-border-width": " $--border-width-base !default",
  "$--cascader-menu-color": " $--color-text-regular !default",
  "$--cascader-menu-option-color-active": " $--color-text-secondary !default",
  "$--cascader-menu-option-fill-active": " rgba($--color-text-secondary, 0.12) !default",
  "$--cascader-menu-option-color-hover": " $--color-text-regular !default",
  "$--cascader-menu-option-fill-hover": " rgba($--color-text-primary, 0.06) !default",
  "$--cascader-menu-option-color-disabled": " #999 !default",
  "$--cascader-menu-option-fill-disabled": " rgba($--color-black, 0.06) !default",
  "$--cascader-menu-option-empty-color": " #666 !default",
  // color||Color|0
  "$--cascader-menu-group-color": " #999 !default",
  "$--cascader-menu-shadow": " 0 1px 2px rgba($--color-black, 0.14), 0 0 3px rgba($--color-black, 0.14) !default",
  "$--cascader-menu-option-pinyin-color": " #999 !default",
  "$--cascader-menu-submenu-shadow": " 1px 1px 2px rgba($--color-black, 0.14), 1px 0 2px rgba($--color-black, 0.14) !default",

  /* Grou------------------------- */
  "$--group-option-flex": " 0 0 (1/5) * 100% !default",
  "$--group-option-offset-bottom": " 12px !default",
  "$--group-option-fill-hover": " rgba($--color-black, 0.06) !default",
  "$--group-title-color": " $--color-black !default",
  "$--group-title-font-size": " $--font-size-base !default",
  "$--group-title-width": " 66px !default",

  /* Ta------------------------- */
  "$--tab-font-size": " $--font-size-base !default",
  "$--tab-border-line": " 1px solid #e4e4e4 !default",
  "$--tab-header-color-active": " $--color-text-secondary !default",
  "$--tab-header-color-hover": " $--color-text-regular !default",
  "$--tab-header-color": " $--color-text-regular !default",
  "$--tab-header-fill-active": " rgba($--color-black, 0.06) !default",
  "$--tab-header-fill-hover": " rgba($--color-black, 0.06) !default",
  "$--tab-vertical-header-width": " 90px !default",
  "$--tab-vertical-header-count-color": " $--color-white !default",
  "$--tab-vertical-header-count-fill": " $--color-text-secondary !default",

  /* Butto------------------------- */
  // fontSize||Font|1
  "$--button-font-size": " $--font-size-base !default",
  // fontWeight||Font|1
  "$--button-font-weight": " $--font-weight-primary !default",
  // borderRadius||Border|2
  "$--button-border-radius": " $--border-radius-base !default",
  // padding||Spacing|3
  "$--button-padding-vertical": " 12px !default",
  // padding||Spacing|3
  "$--button-padding-horizontal": " 20px !default",

  // fontSize||Font|1
  "$--button-medium-font-size": " $--font-size-base !default",
  // borderRadius||Border|2
  "$--button-medium-border-radius": " $--border-radius-base !default",
  // padding||Spacing|3
  "$--button-medium-padding-vertical": " 10px !default",
  // padding||Spacing|3
  "$--button-medium-padding-horizontal": " 20px !default",

  // fontSize||Font|1
  "$--button-small-font-size": " 12px !default",
  "$--button-small-border-radius": " #{$--border-radius-base-1} !default",
  // padding||Spacing|3
  "$--button-small-padding-vertical": " 9px !default",
  // padding||Spacing|3
  "$--button-small-padding-horizontal": " 15px !default",
  // fontSize||Font|1
  "$--button-mini-font-size": " 12px !default",
  "$--button-mini-border-radius": " #{$--border-radius-base-1} !default",
  // padding||Spacing|3
  "$--button-mini-padding-vertical": " 7px !default",
  // padding||Spacing|3
  "$--button-mini-padding-horizontal": " 15px !default",

  // color||Color|0
  "$--button-default-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--button-default-background-color": " $--color-white !default",
  // color||Color|0
  "$--button-default-border-color": " $--border-color-base !default",

  // color||Color|0
  "$--button-disabled-font-color": " $--color-text-placeholder !default",
  // color||Color|0
  "$--button-disabled-background-color": " $--color-white !default",
  // color||Color|0
  "$--button-disabled-border-color": " $--border-color-lighter !default",

  // color||Color|0
  "$--button-primary-border-color": " $--color-primary !default",
  // color||Color|0
  "$--button-primary-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-primary-background-color": " $--color-primary !default",
  // color||Color|0
  "$--button-success-border-color": " $--color-success !default",
  // color||Color|0
  "$--button-success-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-success-background-color": " $--color-success !default",
  // color||Color|0
  "$--button-warning-border-color": " $--color-warning !default",
  // color||Color|0
  "$--button-warning-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-warning-background-color": " $--color-warning !default",
  // color||Color|0
  "$--button-danger-border-color": " $--color-danger !default",
  // color||Color|0
  "$--button-danger-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-danger-background-color": " $--color-danger !default",
  // color||Color|0
  "$--button-info-border-color": " $--color-info !default",
  // color||Color|0
  "$--button-info-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-info-background-color": " $--color-info !default",

  "$--button-hover-tint-percent": " 20% !default",
  "$--button-active-shade-percent": " 10% !default",

  /* cascade------------------------- */
  "$--cascader-height": " 200px !default",

  /* Switc------------------------- */
  // color||Color|0
  "$--switch-on-color": " $--color-primary !default",
  // color||Color|0
  "$--switch-off-color": " $--border-color-base !default",
  // color||Color|0
  "$--switch-disabled-color": " $--border-color-lighter !default",
  // fontSize||Font|1
  "$--switch-font-size": " $--font-size-base !default",
  // borderRadius||Border|2
  "$--switch-core-border-radius": " 10px !default",
  // height||Other|4
  "$--switch-width": " 40px !default",
  // height||Other|4
  "$--switch-height": " 20px !default",
  // height||Other|4
  "$--switch-button-size": " 16px !default",

  /* Dialo------------------------- */
  "$--dialog-background-color": " $--color-primary-light-4 !default",
  "$--dialog-box-shadow": " 0 1px 3px rgba(0, 0, 0, 0.3) !default",
  "$--dialog-close-hover-color": " $--color-primary !default",
  "$--dialog-title-font-size": " $--font-size-large !default",
  "$--dialog-font-size": " 14px !default",
  // fontLineHeight|
  "$--dialog-font-line-height": " $--font-line-height-primary !default",
  "$--dialog-padding-primary": " 20px !default",

  /* Tabl------------------------- */
  // color||Color|0
  "$--table-border-color": " $--border-color-lighter !default",
  "$--table-border": " 1px solid $--table-border-color !default",
  // color||Color|0
  "$--table-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--table-header-color": " $--color-text-secondary !default",
  // color||Color|0
  "$--table-row-hover-background-color": " $--background-color-base !default",
  "$--table-current-row-background-color": " $--color-primary-light-9 !default",
  // color||Color|0
  "$--table-header-background-color": " $--color-white !default",
  "$--table-fixed-box-shadow": " 0 0 10px rgba(0, 0, 0, .12) !default",

  /* Paginatio------------------------- */
  "$--pagination-font-size": " 13px !default",
  "$--pagination-fill": " $--color-white !default",
  "$--pagination-color": " $--color-text-primary !default",
  "$--pagination-border-radius": " 3px !default",
  "$--pagination-button-color": " $--color-text-primary !default",
  "$--pagination-button-width": " 35.5px !default",
  "$--pagination-button-height": " 28px !default",
  "$--pagination-button-disabled-color": " $--color-text-placeholder !default",
  "$--pagination-button-disabled-fill": " $--color-white !default",
  "$--pagination-hover-fill": " $--color-primary !default",
  "$--pagination-hover-color": " $--color-white !default",

  /* Popove------------------------- */
  "$--popover-fill": " $--color-white !default",
  "$--popover-font-size": " $--font-size-base !default",
  "$--popover-border-color": " $--border-color-lighter !default",
  "$--popover-arrow-size": " 6px !default",
  "$--popover-padding": " 12px !default",
  "$--popover-padding-large": " 18px 20px !default",
  "$--popover-title-font-size": " 16px !default",
  "$--popover-title-color": " $--color-text-primary !default",

  /* Toolti------------------------- */
  "$--tooltip-fill": " $--color-text-primary !default",
  "$--tooltip-color": " $--color-white !default",
  "$--tooltip-font-size": " 12px !default",
  "$--tooltip-border-color": " $--color-text-primary !default",
  "$--tooltip-arrow-size": " 6px !default",
  "$--tooltip-padding": " 10px !default",

  /* Ta------------------------- */
  "$--tag-padding": " 0 10px !default",
  "$--tag-fill": " rgba($--color-primary, 0.10) !default",
  // color||Color|0
  "$--tag-font-color": " $--color-primary !default",
  // color||Color|0
  "$--tag-background-color": " $--color-primary !default",
  "$--tag-border": " rgba($--color-primary, 0.20) !default",
  // fontSize||Font|1
  "$--tag-font-size": " 12px !default",
  "$--tag-border-radius": " 4px !default",

  "$--tag-info-fill": " rgba($--color-info, 0.10) !default",
  "$--tag-info-border": " rgba($--color-info, 0.20) !default",
  "$--tag-info-color": " $--color-info !default",

  "$--tag-primary-fill": " rgba($--color-primary, 0.10) !default",
  "$--tag-primary-border": " rgba($--color-primary, 0.20) !default",
  "$--tag-primary-color": " $--color-primary !default",

  "$--tag-success-fill": " rgba($--color-success, 0.10) !default",
  "$--tag-success-border": " rgba($--color-success, 0.20) !default",
  "$--tag-success-color": " $--color-success !default",

  "$--tag-warning-fill": " rgba($--color-warning, 0.10) !default",
  "$--tag-warning-border": " rgba($--color-warning, 0.20) !default",
  "$--tag-warning-color": " $--color-warning !default",

  "$--tag-danger-fill": " rgba($--color-danger, 0.10) !default",
  "$--tag-danger-border": " rgba($--color-danger, 0.20) !default",
  "$--tag-danger-color": " $--color-danger !default",

  /* Tre------------------------- */
  // color||Color|0
  "$--tree-node-hover-background-color": " $--background-color-base !default",
  // color||Color|0
  "$--tree-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--tree-expand-icon-color": " $--color-text-placeholder !default",

  /* Dropdow------------------------- */
  "$--dropdown-menu-box-shadow": " $--box-shadow-light !default",
  "$--dropdown-menuItem-hover-fill": " $--color-primary-light-9 !default",
  "$--dropdown-menuItem-hover-color": " $--link-color !default",

  /* Badg------------------------- */
  "$--badge-fill": " $--color-danger !default",
  "$--badge-radius": " 10px !default",
  "$--badge-font-size": " 12px !default",
  "$--badge-padding": " 6px !default",
  "$--badge-size": " 18px !default",

  /* Car-------------------------*/
  "$--card-border-color": " $--border-color-lighter !default",
  "$--card-border-radius": " 4px !default",
  "$--card-padding": " 20px !default",

  /* Slide-------------------------*/
  // color||Color|0
  "$--slider-main-background-color": " $--color-primary !default",
  // color||Color|0
  "$--slider-runway-background-color": " $--border-color-light !default",
  "$--slider-button-hover-color": " mix($--color-primary, black, 97%) !default",
  // color||Color|0
  "$--slider-stop-background-color": " $--color-white !default",
  // color||Color|0
  "$--slider-disable-color": " $--color-text-placeholder !default",

  // margin||Spacing|3
  "$--slider-margin": " 16px 0 !default",
  "$--slider-border-radius": " 3px !default",
  // height||Other|4
  "$--slider-height": " 6px !default",
  // height||Other|4
  "$--slider-button-size": " 16px !default",
  "$--slider-button-wrapper-size": " 36px !default",
  "$--slider-button-wrapper-offset": " -15px !default",

  /* Step-------------------------*/
  "$--steps-border-color": " $--disabled-border-base !default",
  "$--steps-border-radius": " 4px !default",
  "$--steps-padding": " 20px !default",

  /* Men-------------------------*/
  "$--menu-item-font-size": " $--font-size-base !default",
  "$--menu-item-color": " $--color-text-primary !default",
  "$--menu-item-fill": " $--color-white !default",
  "$--menu-item-hover-fill": " $--color-primary-light-9 !default",

  /* Rat-------------------------*/
  // height||Other|3
  "$--rate-height": " 20px !default",
  // fontSize||Font|1
  "$--rate-font-size": " $--font-size-base !default",
  // height||Other|3
  "$--rate-icon-size": " 18px !default",
  // margin||Spacing|2
  "$--rate-icon-margin": " 6px !default",
  // color||Color|0
  "$--rate-icon-color": " $--color-text-placeholder !default",

  /* DatePicke-------------------------*/
  // color||Color|0
  "$--datepicker-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--datepicker-off-font-color": " $--color-text-placeholder !default",
  // color||Color|0
  "$--datepicker-header-font-color": " $--color-text-regular !default",
  "$--datepicker-icon-color": " $--color-text-primary !default",
  "$--datepicker-border-color": " $--disabled-border-base !default",
  "$--datepicker-inner-border-color": " #e4e4e4 !default",
  // color||Color|0
  "$--datepicker-inrange-color": " $--border-color-extra-light !default",
  // color||Color|0
  "$--datepicker-inrange-hover-color": " $--border-color-extra-light !default",
  // color||Color|0
  "$--datepicker-active-color": " $--color-primary !default",
  // color||Color|0
  "$--datepicker-text-hover-color": " $--color-primary !default",
  "$--datepicker-cell-hover-color": " #fff !default",

  /* Loadin-------------------------*/
  "$--loading-spinner-size": " 42px !default",
  "$--loading-fullscreen-spinner-size": " 50px !default",

  /* Scrollba-------------------------*/
  "$--scrollbar-background-color": " rgba($--color-text-secondary, .3) !default",
  "$--scrollbar-hover-background-color": " rgba($--color-text-secondary, .5) !default",

  /* Carouse-------------------------*/
  "$--carousel-arrow-font-size": " 12px !default",
  "$--carousel-arrow-size": " 36px !default",
  "$--carousel-arrow-background": " rgba(31, 45, 61, 0.11) !default",
  "$--carousel-arrow-hover-background": " rgba(31, 45, 61, 0.23) !default",
  "$--carousel-indicator-width": " 30px !default",
  "$--carousel-indicator-height": " 2px !default",
  "$--carousel-indicator-padding-horizontal": " 4px !default",
  "$--carousel-indicator-padding-vertical": " 12px !default",
  "$--carousel-indicator-out-color": " $--border-color-hover !default",

  /* Collaps-------------------------*/
  "$--collapse-border-color": " $--border-color-lighter !default",
  "$--collapse-header-height": " 48px !default",
  "$--collapse-header-padding": " 20px !default",
  "$--collapse-header-fill": " $--color-white !default",
  "$--collapse-header-color": " $--color-text-primary !default",
  "$--collapse-header-size": " 13px !default",
  "$--collapse-content-fill": " $--color-white !default",
  "$--collapse-content-size": " 13px !default",
  "$--collapse-content-color": " $--color-text-primary !default",

  /* Transfe-------------------------*/
  "$--transfer-border-color": " $--border-color-lighter !default",
  "$--transfer-border-radius": " $--border-radius-base !default",
  // height||Other|4
  "$--transfer-panel-width": " 200px !default",
  // height||Other|4
  "$--transfer-panel-header-height": " 40px !default",
  // color||Color|0
  "$--transfer-panel-header-background-color": " $--background-color-base !default",
  // height||Other|4
  "$--transfer-panel-footer-height": " 40px !default",
  // height||Other|4
  "$--transfer-panel-body-height": " 246px !default",
  // height||Other|4
  "$--transfer-item-height": " 30px !default",
  // height||Other|4
  "$--transfer-filter-height": " 32px !default",

  /* Header
  "  --------------------------*/
  "$--header-padding": " 0 20px !default",

  /* Foote-------------------------*/
  "$--footer-padding": " 0 20px !default",

  /* Mai-------------------------*/
  "$--main-padding": " 20px !default",

  /* Timelin-------------------------*/
  "$--timeline-node-size-normal": " 12px !default",
  "$--timeline-node-size-large": " 14px !default",
  "$--timeline-node-color": " $--border-color-light !default",

  /* Break-poin-------------------------*/
  "$--sm": " 768px !default",
  "$--md": " 992px !default",
  "$--lg": " 1200px !default",
  "$--xl": " 1920px !default",
}

var razor = {/* Element Chalk Variables */

  // Special comment for theme configurator
  // type|skipAutoTranslation|Category|Order
  // skipAutoTranslation 1

  /* Transition
  -------------------------- */
  "$--all-transition": " all .3s cubic-bezier(.645,.045,.355,1) !default",
  "$--fade-transition": " opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default",
  "$--fade-linear-transition": " opacity 200ms linear !default",
  "$--md-fade-transition": " transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default",
  "$--border-transition-base": " border-color .2s cubic-bezier(.645,.045,.355,1) !default",
  "$--color-transition-base": " color .2s cubic-bezier(.645,.045,.355,1) !default",

  /* Color
  -------------------------- */
  // color|1|BrandColor|0
  "$--color-primary": " rgb(43, 58, 73) !default",
  // color|1|BackgroundColor|4
  "$--color-white": " #FFFFFF !default",
  // color|1|BackgroundColor|4
  "$--color-black": " #000000 !default",
  "$--color-primary-light-1": " mix($--color-white, $--color-primary, 10%) !default", /* 53a8ff */
  "$--color-primary-light-2": " mix($--color-white, $--color-primary, 20%) !default", /* 66b1ff */
  "$--color-primary-light-3": " mix($--color-white, $--color-primary, 30%) !default", /* 79bbff */
  "$--color-primary-light-4": " mix($--color-white, $--color-primary, 40%) !default", /* 8cc5ff */
  "$--color-primary-light-5": " mix($--color-white, $--color-primary, 50%) !default", /* a0cfff */
  "$--color-primary-light-6": " mix($--color-white, $--color-primary, 60%) !default", /* b3d8ff */
  "$--color-primary-light-7": " mix($--color-white, $--color-primary, 70%) !default", /* c6e2ff */
  "$--color-primary-light-8": " mix($--color-white, $--color-primary, 80%) !default", /* d9ecff */
  "$--color-primary-light-9": " mix($--color-white, $--color-primary, 90%) !default", /* ecf5ff */
  // color|1|SecondaryColor|1
  "$--color-success": " #67C23A !default",
  // color|1|SecondaryColor|1
  "$--color-warning": " #E6A23C !default",
  // color|1|SecondaryColor|1
  "$--color-danger": " #F56C6C !default",
  // color|1|SecondaryColor|1
  "$--color-info": " #909399 !default",

  "$--color-success-light": " mix($--color-white, $--color-success, 80%) !default",
  "$--color-warning-light": " mix($--color-white, $--color-warning, 80%) !default",
  "$--color-danger-light": " mix($--color-white, $--color-danger, 80%) !default",
  "$--color-info-light": " mix($--color-white, $--color-info, 80%) !default",

  "$--color-success-lighter": " mix($--color-white, $--color-success, 90%) !default",
  "$--color-warning-lighter": " mix($--color-white, $--color-warning, 90%) !default",
  "$--color-danger-lighter": " mix($--color-white, $--color-danger, 90%) !default",
  "$--color-info-lighter": " mix($--color-white, $--color-info, 90%) !default",
  // color|1|FontColor|2
  "$--color-text-primary": " #303133 !default",
  // color|1|FontColor|2
  "$--color-text-regular": " #606266 !default",
  // color|1|FontColor|2
  "$--color-text-secondary": " #909399 !default",
  // color|1|FontColor|2
  "$--color-text-placeholder": " #C0C4CC !default",
  // color|1|BorderColor|3
  "$--border-color-base": " #DCDFE6 !default",
  // color|1|BorderColor|3
  "$--border-color-light": " #E4E7ED !default",
  // color|1|BorderColor|3
  "$--border-color-lighter": " #EBEEF5 !default",
  // color|1|BorderColor|3
  "$--border-color-extra-light": " #F2F6FC !default",

  // Background
  // color|1|BackgroundColor|4
  "$--background-color-base": " #f5f7fa !default",

  /* Link------------------------- */
  "$--link-color": " $--color-primary-light-2 !default",
  "$--link-hover-color": " $--color-primary !default",

  /* Border------------------------- */
  "$--border-width-base": " 1px !default",
  "$--border-style-base": " solid !default",
  "$--border-color-hover": " $--color-text-placeholder !default",
  "$--border-base": " $--border-width-base $--border-style-base $--border-color-base !default",
  // borderRadius|1|Radius|0
  "$--border-radius-base": " 4px !default",
  // borderRadius|1|Radius|0
  "$--border-radius-small": " 2px !default",
  // borderRadius|1|Radius|0
  "$--border-radius-circle": " 100% !default",

  // Box-shadow
  // boxShadow|1|Shadow|1
  "$--box-shadow-base": " 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) !default",
  /* boxShadow | 1 | Shadow | 1-- */
  "$--box-shadow-dark": " 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12) !default",
  // boxShadow|1|Shadow|1
  "$--box-shadow-light": " 0 2px 12px 0 rgba(0, 0, 0, 0.1) !default",

  /* Fil------------------------- */
  "$--fill-base": " $--color-white !default",

  /* Typograph------------------------- */
  "$--font-path": " 'fonts' !default",
  // fontSize|1|FontSize|0
  "$--font-size-extra-large": " 20px !default",
  // fontSize|1|FontSize|0
  "$--font-size-large": " 18px !default",
  // fontSize|1|FontSize|0
  "$--font-size-medium": " 16px !default",
  // fontSize|1|FontSize|0
  "$--font-size-base": " 14px !default",
  // fontSize|1|FontSize|0
  "$--font-size-small": " 13px !default",
  // fontSize|1|FontSize|0
  "$--font-size-extra-small": " 12px !default",
  // fontWeight|1|FontWeight|1
  "$--font-weight-primary": " 500 !default",
  // fontWeight|1|FontWeight|1
  "$--font-weight-secondary": " 100 !default",
  // fontLineHeight|1|LineHeight|2
  "$--font-line-height-primary": " 24px !default",
  // fontLineHeight|1|LineHeight|2
  "$--font-line-height-secondary": " 16px !default",
  "$--font-color-disabled-base": " #bbb !default",
  /* Siz------------------------- */
  "$--size-base": " 14px !default",

  /* z-inde------------------------- */
  "$--index-normal": " 1 !default",
  "$--index-top": " 1000 !default",
  "$--index-popper": " 2000 !default",

  /* Disable bas------------------------- */
  "$--disabled-fill-base": " $--background-color-base !default",
  "$--disabled-color-base": " $--color-text-placeholder !default",
  "$--disabled-border-base": " $--border-color-light !default",

  /* Ico------------------------- */
  "$--icon-color": " #666 !default",
  "$--icon-color-base": " $--color-info !default",

  /* Checkbo------------------------- */
  // fontSize||Font|1
  "$--checkbox-font-size": " 14px !default",
  // fontWeight||Font|1
  "$--checkbox-font-weight": " $--font-weight-primary !default",
  // color||Color|0
  "$--checkbox-font-color": " $--color-text-regular !default",
  "$--checkbox-input-height": " 14px !default",
  "$--checkbox-input-width": " 14px !default",
  // borderRadius||Border|2
  "$--checkbox-input-border-radius": " $--border-radius-small !default",
  // color||Color|0
  "$--checkbox-input-background-color": " $--color-white !default",
  "$--checkbox-input-border": " $--border-base !default",
  // color||Color|0
  "$--checkbox-input-border-color": " $--border-color-base !default",
  // color||Color|0
  "$--checkbox-icon-color": " $--color-white !default",

  // color||Color|0
  "$--checkbox-disabled-input-border-color": " $--border-color-base !default",
  "$--checkbox-disabled-input-fill": " #edf2fc !default",
  "$--checkbox-disabled-icon-color": " $--color-text-placeholder !default",

  "$--checkbox-disabled-checked-input-fill": " $--border-color-extra-light !default",
  "$--checkbox-disabled-checked-input-border-color": " $--border-color-base !default",
  "$--checkbox-disabled-checked-icon-color": " $--color-text-placeholder !default",

  // color||Color|0
  "$--checkbox-checked-font-color": " $--color-primary !default",
  "$--checkbox-checked-input-border-color": " $--color-primary !default",
  // color||Color|0
  "$--checkbox-checked-input-background-color": " $--color-primary !default",
  "$--checkbox-checked-icon-color": " $--fill-base !default",

  "$--checkbox-input-border-color-hover": " $--color-primary !default",
  // height||Other|4
  "$--checkbox-bordered-height": " 40px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-padding": " 9px 20px 9px 10px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-medium-padding": " 7px 20px 7px 10px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-small-padding": " 5px 15px 5px 10px !default",
  // padding||Spacing|3
  "$--checkbox-bordered-mini-padding": " 3px 15px 3px 10px !default",
  "$--checkbox-bordered-medium-input-height": " 14px !default",
  "$--checkbox-bordered-medium-input-width": " 14px !default",
  // height||Other|4
  "$--checkbox-bordered-medium-height": " 36px !default",
  "$--checkbox-bordered-small-input-height": " 12px !default",
  "$--checkbox-bordered-small-input-width": " 12px !default",
  // height||Other|4
  "$--checkbox-bordered-small-height": " 32px !default",
  "$--checkbox-bordered-mini-input-height": " 12px !default",
  "$--checkbox-bordered-mini-input-width": " 12px !default",
  // height||Other|4
  "$--checkbox-bordered-mini-height": " 28px !default",

  // fontSize||Font|1
  "$--checkbox-button-font-size": " $--font-size-base !default",
  // color||Color|0
  "$--checkbox-button-checked-background-color": " $--color-primary !default",
  // color||Color|0
  "$--checkbox-button-checked-font-color": " $--color-white !default",
  // color||Color|0
  "$--checkbox-button-checked-border-color": " $--color-primary !default",

  /* Radi------------------------- */
  // fontSize||Font|1
  "$--radio-font-size": " $--font-size-base !default",
  // fontWeight||Font|1
  "$--radio-font-weight": " $--font-weight-primary !default",
  // color||Color|0
  "$--radio-font-color": " $--color-text-regular !default",
  "$--radio-input-height": " 14px !default",
  "$--radio-input-width": " 14px !default",
  // borderRadius||Border|2
  "$--radio-input-border-radius": " $--border-radius-circle !default",
  // color||Color|0
  "$--radio-input-background-color": " $--color-white !default",
  "$--radio-input-border": " $--border-base !default",
  // color||Color|0
  "$--radio-input-border-color": " $--border-color-base !default",
  // color||Color|0
  "$--radio-icon-color": " $--color-white !default",

  "$--radio-disabled-input-border-color": " $--disabled-border-base !default",
  "$--radio-disabled-input-fill": " $--disabled-fill-base !default",
  "$--radio-disabled-icon-color": " $--disabled-fill-base !default",

  "$--radio-disabled-checked-input-border-color": " $--disabled-border-base !default",
  "$--radio-disabled-checked-input-fill": " $--disabled-fill-base !default",
  "$--radio-disabled-checked-icon-color": " $--color-text-placeholder !default",

  // color||Color|0
  "$--radio-checked-font-color": " $--color-primary !default",
  // color||Color|0
  "$--radio-checked-input-border-color": " $--color-primary !default",
  // color||Color|0
  "$--radio-checked-input-background-color": " $--color-white !default",
  // color||Color|0
  "$--radio-checked-icon-color": " $--color-primary !default",

  "$--radio-input-border-color-hover": " $--color-primary !default",

  "$--radio-bordered-height": " 40px !default",
  "$--radio-bordered-padding": " 12px 20px 0 10px !default",
  "$--radio-bordered-medium-padding": " 10px 20px 0 10px !default",
  "$--radio-bordered-small-padding": " 8px 15px 0 10px !default",
  "$--radio-bordered-mini-padding": " 6px 15px 0 10px !default",
  "$--radio-bordered-medium-input-height": " 14px !default",
  "$--radio-bordered-medium-input-width": " 14px !default",
  "$--radio-bordered-medium-height": " 36px !default",
  "$--radio-bordered-small-input-height": " 12px !default",
  "$--radio-bordered-small-input-width": " 12px !default",
  "$--radio-bordered-small-height": " 32px !default",
  "$--radio-bordered-mini-input-height": " 12px !default",
  "$--radio-bordered-mini-input-width": " 12px !default",
  "$--radio-bordered-mini-height": " 28px !default",

  // fontSize||Font|1
  "$--radio-button-font-size": " $--font-size-base !default",
  // color||Color|0
  "$--radio-button-checked-background-color": " $--color-primary !default",
  // color||Color|0
  "$--radio-button-checked-font-color": " $--color-white !default",
  // color||Color|0
  "$--radio-button-checked-border-color": " $--color-primary !default",
  "$--radio-button-disabled-checked-fill": " $--border-color-extra-light !default",

  /* Selec------------------------- */
  "$--select-border-color-hover": " $--border-color-hover !default",
  "$--select-disabled-border": " $--disabled-border-base !default",
  // fontSize||Font|1
  "$--select-font-size": " $--font-size-base !default",
  "$--select-close-hover-color": " $--color-text-secondary !default",

  "$--select-input-color": " $--color-text-placeholder !default",
  "$--select-multiple-input-color": " #666 !default",
  // color||Color|0
  "$--select-input-focus-border-color": " $--color-primary !default",
  // fontSize||Font|1
  "$--select-input-font-size": " 14px !default",

  "$--select-option-color": " $--color-text-regular !default",
  "$--select-option-disabled-color": " $--color-text-placeholder !default",
  "$--select-option-disabled-background": " $--color-white !default",
  // height||Other|4
  "$--select-option-height": " 34px !default",
  "$--select-option-hover-background": " $--background-color-base !default",
  // color||Color|0
  "$--select-option-selected-font-color": " $--color-primary !default",
  "$--select-option-selected-hover": " $--background-color-base !default",

  "$--select-group-color": " $--color-info !default",
  // height||Other|4
  "$--select-group-height": " 30px !default",
  "$--select-group-font-size": " 12px !default",

  "$--select-dropdown-background": " $--color-white !default",
  "$--select-dropdown-shadow": " $--box-shadow-light !default",
  "$--select-dropdown-empty-color": " #999 !default",
  // height||Other|4
  "$--select-dropdown-max-height": " 274px !default",
  // padding||Spacing|3
  "$--select-dropdown-padding": " 6px 0 !default",
  "$--select-dropdown-empty-padding": " 10px 0 !default",
  "$--select-dropdown-border": " solid 1px $--border-color-light !default",

  /* Aler------------------------- */
  "$--alert-padding": " 8px 16px !default",
  "$--alert-border-radius": " $--border-radius-base !default",
  "$--alert-title-font-size": " 13px !default",
  "$--alert-description-font-size": " 12px !default",
  "$--alert-close-font-size": " 12px !default",
  "$--alert-close-customed-font-size": " 13px !default",

  "$--alert-success-color": " $--color-success-lighter !default",
  "$--alert-info-color": " $--color-info-lighter !default",
  "$--alert-warning-color": " $--color-warning-lighter !default",
  "$--alert-danger-color": " $--color-danger-lighter !default",

  "$--alert-icon-size": " 16px !default",
  "$--alert-icon-large-size": " 28px !default",

  /* Message Bo------------------------- */
  "$--msgbox-width": " 420px !default",
  "$--msgbox-border-radius": " 4px !default",
  "$--msgbox-font-size": " $--font-size-large !default",
  "$--msgbox-content-font-size": " $--font-size-base !default",
  "$--msgbox-content-color": " $--color-text-regular !default",
  "$--msgbox-error-font-size": " 12px !default",
  "$--msgbox-padding-primary": " 15px !default",

  "$--msgbox-success-color": " $--color-success !default",
  "$--msgbox-info-color": " $--color-info !default",
  "$--msgbox-warning-color": " $--color-warning !default",
  "$--msgbox-danger-color": " $--color-danger !default",

  /* Messag------------------------- */
  "$--message-shadow": " $--box-shadow-base !default",
  "$--message-min-width": " 380px !default",
  "$--message-background-color": " #edf2fc !default",
  "$--message-padding": " 15px 15px 15px 20px !default",
  "$--message-content-color": " $--color-text-regular !default",
  "$--message-close-color": " $--color-text-placeholder !default",
  "$--message-close-size": " 16px !default",
  "$--message-close-hover-color": " $--color-text-secondary !default",

  "$--message-success-color": " $--color-success !default",
  "$--message-info-color": " $--color-info !default",
  "$--message-warning-color": " $--color-warning !default",
  "$--message-danger-color": " $--color-danger !default",

  /* Notificatio------------------------- */
  "$--notification-width": " 330px !default",
  "$--notification-padding": " 14px 26px 14px 13px !default",
  "$--notification-radius": " 8px !default",
  "$--notification-shadow": " $--box-shadow-light !default",
  "$--notification-border-color": " $--border-color-lighter !default",
  "$--notification-icon-size": " 24px !default",
  "$--notification-close-font-size": " $--message-close-size !default",
  "$--notification-group-margin": " 13px !default",
  "$--notification-font-size": " $--font-size-base !default",
  "$--notification-color": " $--color-text-regular !default",
  "$--notification-title-font-size": " 16px !default",
  "$--notification-title-color": " $--color-text-primary !default",

  "$--notification-close-color": " $--color-text-secondary !default",
  "$--notification-close-hover-color": " $--color-text-regular !default",

  "$--notification-success-color": " $--color-success !default",
  "$--notification-info-color": " $--color-info !default",
  "$--notification-warning-color": " $--color-warning !default",
  "$--notification-danger-color": " $--color-danger !default",

  /* Inpu------------------------- */
  // fontSize||Font|1
  "$--input-font-size": " $--font-size-base !default",
  // color||Color|0
  "$--input-font-color": " $--color-text-regular !default",
  // height||Other|4
  "$--input-width": " 140px !default",
  // height||Other|4
  "$--input-height": " 40px !default",
  "$--input-border": " $--border-base !default",
  "$--input-border-color": " $--border-color-base !default",
  // borderRadius||Border|2
  "$--input-border-radius": " $--border-radius-base !default",
  "$--input-border-color-hover": " $--border-color-hover !default",
  // color||Color|0
  "$--input-background-color": " $--color-white !default",
  "$--input-fill-disabled": " $--disabled-fill-base !default",
  "$--input-color-disabled": " $--font-color-disabled-base !default",
  // color||Color|0
  "$--input-icon-color": " $--color-text-placeholder !default",
  // color||Color|0
  "$--input-placeholder-color": " $--color-text-placeholder !default",
  "$--input-max-width": " 314px !default",

  "$--input-hover-border": " $--border-color-hover !default",
  "$--input-clear-hover-color": " $--color-text-secondary !default",

  "$--input-focus-border": " $--color-primary !default",
  "$--input-focus-fill": " $--color-white !default",

  "$--input-disabled-fill": " $--disabled-fill-base !default",
  "$--input-disabled-border": " $--disabled-border-base !default",
  "$--input-disabled-color": " $--disabled-color-base !default",
  "$--input-disabled-placeholder-color": " $--color-text-placeholder !default",

  // fontSize||Font|1
  "$--input-medium-font-size": " 14px !default",
  // height||Other|4
  "$--input-medium-height": " 36px !default",
  // fontSize||Font|1
  "$--input-small-font-size": " 13px !default",
  // height||Other|4
  "$--input-small-height": " 32px !default",
  // fontSize||Font|1
  "$--input-mini-font-size": " 12px !default",
  // height||Other|4
  "$--input-mini-height": " 28px !default",

  /* Cascade------------------------- */
  // color||Color|0
  "$--cascader-menu-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--cascader-menu-selected-font-color": " $--color-primary !default",
  "$--cascader-menu-fill": " $--fill-base !default",
  // fontSize||Font|1
  "$--cascader-menu-font-size": " $--font-size-base !default",
  // borderRadius||Border|2
  "$--cascader-menu-radius": " $--border-radius-base !default",
  "$--cascader-menu-border": " $--border-base !default",
  // color||Color|0
  "$--cascader-menu-border-color": " $--border-color-base !default",
  "$--cascader-menu-border-width": " $--border-width-base !default",
  "$--cascader-menu-color": " $--color-text-regular !default",
  "$--cascader-menu-option-color-active": " $--color-text-secondary !default",
  "$--cascader-menu-option-fill-active": " rgba($--color-text-secondary, 0.12) !default",
  "$--cascader-menu-option-color-hover": " $--color-text-regular !default",
  "$--cascader-menu-option-fill-hover": " rgba($--color-text-primary, 0.06) !default",
  "$--cascader-menu-option-color-disabled": " #999 !default",
  "$--cascader-menu-option-fill-disabled": " rgba($--color-black, 0.06) !default",
  "$--cascader-menu-option-empty-color": " #666 !default",
  // color||Color|0
  "$--cascader-menu-group-color": " #999 !default",
  "$--cascader-menu-shadow": " 0 1px 2px rgba($--color-black, 0.14), 0 0 3px rgba($--color-black, 0.14) !default",
  "$--cascader-menu-option-pinyin-color": " #999 !default",
  "$--cascader-menu-submenu-shadow": " 1px 1px 2px rgba($--color-black, 0.14), 1px 0 2px rgba($--color-black, 0.14) !default",

  /* Grou------------------------- */
  "$--group-option-flex": " 0 0 (1/5) * 100% !default",
  "$--group-option-offset-bottom": " 12px !default",
  "$--group-option-fill-hover": " rgba($--color-black, 0.06) !default",
  "$--group-title-color": " $--color-black !default",
  "$--group-title-font-size": " $--font-size-base !default",
  "$--group-title-width": " 66px !default",

  /* Ta------------------------- */
  "$--tab-font-size": " $--font-size-base !default",
  "$--tab-border-line": " 1px solid #e4e4e4 !default",
  "$--tab-header-color-active": " $--color-text-secondary !default",
  "$--tab-header-color-hover": " $--color-text-regular !default",
  "$--tab-header-color": " $--color-text-regular !default",
  "$--tab-header-fill-active": " rgba($--color-black, 0.06) !default",
  "$--tab-header-fill-hover": " rgba($--color-black, 0.06) !default",
  "$--tab-vertical-header-width": " 90px !default",
  "$--tab-vertical-header-count-color": " $--color-white !default",
  "$--tab-vertical-header-count-fill": " $--color-text-secondary !default",

  /* Butto------------------------- */
  // fontSize||Font|1
  "$--button-font-size": " $--font-size-base !default",
  // fontWeight||Font|1
  "$--button-font-weight": " $--font-weight-primary !default",
  // borderRadius||Border|2
  "$--button-border-radius": " $--border-radius-base !default",
  // padding||Spacing|3
  "$--button-padding-vertical": " 12px !default",
  // padding||Spacing|3
  "$--button-padding-horizontal": " 20px !default",

  // fontSize||Font|1
  "$--button-medium-font-size": " $--font-size-base !default",
  // borderRadius||Border|2
  "$--button-medium-border-radius": " $--border-radius-base !default",
  // padding||Spacing|3
  "$--button-medium-padding-vertical": " 10px !default",
  // padding||Spacing|3
  "$--button-medium-padding-horizontal": " 20px !default",

  // fontSize||Font|1
  "$--button-small-font-size": " 12px !default",
  "$--button-small-border-radius": " #{$--border-radius-base-1} !default",
  // padding||Spacing|3
  "$--button-small-padding-vertical": " 9px !default",
  // padding||Spacing|3
  "$--button-small-padding-horizontal": " 15px !default",
  // fontSize||Font|1
  "$--button-mini-font-size": " 12px !default",
  "$--button-mini-border-radius": " #{$--border-radius-base-1} !default",
  // padding||Spacing|3
  "$--button-mini-padding-vertical": " 7px !default",
  // padding||Spacing|3
  "$--button-mini-padding-horizontal": " 15px !default",

  // color||Color|0
  "$--button-default-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--button-default-background-color": " $--color-white !default",
  // color||Color|0
  "$--button-default-border-color": " $--border-color-base !default",

  // color||Color|0
  "$--button-disabled-font-color": " $--color-text-placeholder !default",
  // color||Color|0
  "$--button-disabled-background-color": " $--color-white !default",
  // color||Color|0
  "$--button-disabled-border-color": " $--border-color-lighter !default",

  // color||Color|0
  "$--button-primary-border-color": " $--color-primary !default",
  // color||Color|0
  "$--button-primary-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-primary-background-color": " $--color-primary !default",
  // color||Color|0
  "$--button-success-border-color": " $--color-success !default",
  // color||Color|0
  "$--button-success-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-success-background-color": " $--color-success !default",
  // color||Color|0
  "$--button-warning-border-color": " $--color-warning !default",
  // color||Color|0
  "$--button-warning-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-warning-background-color": " $--color-warning !default",
  // color||Color|0
  "$--button-danger-border-color": " $--color-danger !default",
  // color||Color|0
  "$--button-danger-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-danger-background-color": " $--color-danger !default",
  // color||Color|0
  "$--button-info-border-color": " $--color-info !default",
  // color||Color|0
  "$--button-info-font-color": " $--color-white !default",
  // color||Color|0
  "$--button-info-background-color": " $--color-info !default",

  "$--button-hover-tint-percent": " 20% !default",
  "$--button-active-shade-percent": " 10% !default",

  /* cascade------------------------- */
  "$--cascader-height": " 200px !default",

  /* Switc------------------------- */
  // color||Color|0
  "$--switch-on-color": " $--color-primary !default",
  // color||Color|0
  "$--switch-off-color": " $--border-color-base !default",
  // color||Color|0
  "$--switch-disabled-color": " $--border-color-lighter !default",
  // fontSize||Font|1
  "$--switch-font-size": " $--font-size-base !default",
  // borderRadius||Border|2
  "$--switch-core-border-radius": " 10px !default",
  // height||Other|4
  "$--switch-width": " 40px !default",
  // height||Other|4
  "$--switch-height": " 20px !default",
  // height||Other|4
  "$--switch-button-size": " 16px !default",

  /* Dialo------------------------- */
  "$--dialog-background-color": " $--color-primary-light-4 !default",
  "$--dialog-box-shadow": " 0 1px 3px rgba(0, 0, 0, 0.3) !default",
  "$--dialog-close-hover-color": " $--color-primary !default",
  "$--dialog-title-font-size": " $--font-size-large !default",
  "$--dialog-font-size": " 14px !default",
  // fontLineHeight|
  "$--dialog-font-line-height": " $--font-line-height-primary !default",
  "$--dialog-padding-primary": " 20px !default",

  /* Tabl------------------------- */
  // color||Color|0
  "$--table-border-color": " $--border-color-lighter !default",
  "$--table-border": " 1px solid $--table-border-color !default",
  // color||Color|0
  "$--table-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--table-header-color": " $--color-text-secondary !default",
  // color||Color|0
  "$--table-row-hover-background-color": " $--background-color-base !default",
  "$--table-current-row-background-color": " $--color-primary-light-9 !default",
  // color||Color|0
  "$--table-header-background-color": " $--color-white !default",
  "$--table-fixed-box-shadow": " 0 0 10px rgba(0, 0, 0, .12) !default",

  /* Paginatio------------------------- */
  "$--pagination-font-size": " 13px !default",
  "$--pagination-fill": " $--color-white !default",
  "$--pagination-color": " $--color-text-primary !default",
  "$--pagination-border-radius": " 3px !default",
  "$--pagination-button-color": " $--color-text-primary !default",
  "$--pagination-button-width": " 35.5px !default",
  "$--pagination-button-height": " 28px !default",
  "$--pagination-button-disabled-color": " $--color-text-placeholder !default",
  "$--pagination-button-disabled-fill": " $--color-white !default",
  "$--pagination-hover-fill": " $--color-primary !default",
  "$--pagination-hover-color": " $--color-white !default",

  /* Popove------------------------- */
  "$--popover-fill": " $--color-white !default",
  "$--popover-font-size": " $--font-size-base !default",
  "$--popover-border-color": " $--border-color-lighter !default",
  "$--popover-arrow-size": " 6px !default",
  "$--popover-padding": " 12px !default",
  "$--popover-padding-large": " 18px 20px !default",
  "$--popover-title-font-size": " 16px !default",
  "$--popover-title-color": " $--color-text-primary !default",

  /* Toolti------------------------- */
  "$--tooltip-fill": " $--color-text-primary !default",
  "$--tooltip-color": " $--color-white !default",
  "$--tooltip-font-size": " 12px !default",
  "$--tooltip-border-color": " $--color-text-primary !default",
  "$--tooltip-arrow-size": " 6px !default",
  "$--tooltip-padding": " 10px !default",

  /* Ta------------------------- */
  "$--tag-padding": " 0 10px !default",
  "$--tag-fill": " rgba($--color-primary, 0.10) !default",
  // color||Color|0
  "$--tag-font-color": " $--color-primary !default",
  // color||Color|0
  "$--tag-background-color": " $--color-primary !default",
  "$--tag-border": " rgba($--color-primary, 0.20) !default",
  // fontSize||Font|1
  "$--tag-font-size": " 12px !default",
  "$--tag-border-radius": " 4px !default",

  "$--tag-info-fill": " rgba($--color-info, 0.10) !default",
  "$--tag-info-border": " rgba($--color-info, 0.20) !default",
  "$--tag-info-color": " $--color-info !default",

  "$--tag-primary-fill": " rgba($--color-primary, 0.10) !default",
  "$--tag-primary-border": " rgba($--color-primary, 0.20) !default",
  "$--tag-primary-color": " $--color-primary !default",

  "$--tag-success-fill": " rgba($--color-success, 0.10) !default",
  "$--tag-success-border": " rgba($--color-success, 0.20) !default",
  "$--tag-success-color": " $--color-success !default",

  "$--tag-warning-fill": " rgba($--color-warning, 0.10) !default",
  "$--tag-warning-border": " rgba($--color-warning, 0.20) !default",
  "$--tag-warning-color": " $--color-warning !default",

  "$--tag-danger-fill": " rgba($--color-danger, 0.10) !default",
  "$--tag-danger-border": " rgba($--color-danger, 0.20) !default",
  "$--tag-danger-color": " $--color-danger !default",

  /* Tre------------------------- */
  // color||Color|0
  "$--tree-node-hover-background-color": " $--background-color-base !default",
  // color||Color|0
  "$--tree-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--tree-expand-icon-color": " $--color-text-placeholder !default",

  /* Dropdow------------------------- */
  "$--dropdown-menu-box-shadow": " $--box-shadow-light !default",
  "$--dropdown-menuItem-hover-fill": " $--color-primary-light-9 !default",
  "$--dropdown-menuItem-hover-color": " $--link-color !default",

  /* Badg------------------------- */
  "$--badge-fill": " $--color-danger !default",
  "$--badge-radius": " 10px !default",
  "$--badge-font-size": " 12px !default",
  "$--badge-padding": " 6px !default",
  "$--badge-size": " 18px !default",

  /* Car-------------------------*/
  "$--card-border-color": " $--border-color-lighter !default",
  "$--card-border-radius": " 4px !default",
  "$--card-padding": " 20px !default",

  /* Slide-------------------------*/
  // color||Color|0
  "$--slider-main-background-color": " $--color-primary !default",
  // color||Color|0
  "$--slider-runway-background-color": " $--border-color-light !default",
  "$--slider-button-hover-color": " mix($--color-primary, black, 97%) !default",
  // color||Color|0
  "$--slider-stop-background-color": " $--color-white !default",
  // color||Color|0
  "$--slider-disable-color": " $--color-text-placeholder !default",

  // margin||Spacing|3
  "$--slider-margin": " 16px 0 !default",
  "$--slider-border-radius": " 3px !default",
  // height||Other|4
  "$--slider-height": " 6px !default",
  // height||Other|4
  "$--slider-button-size": " 16px !default",
  "$--slider-button-wrapper-size": " 36px !default",
  "$--slider-button-wrapper-offset": " -15px !default",

  /* Step-------------------------*/
  "$--steps-border-color": " $--disabled-border-base !default",
  "$--steps-border-radius": " 4px !default",
  "$--steps-padding": " 20px !default",

  /* Men-------------------------*/
  "$--menu-item-font-size": " $--font-size-base !default",
  "$--menu-item-color": " $--color-text-primary !default",
  "$--menu-item-fill": " $--color-white !default",
  "$--menu-item-hover-fill": " $--color-primary-light-9 !default",

  /* Rat-------------------------*/
  // height||Other|3
  "$--rate-height": " 20px !default",
  // fontSize||Font|1
  "$--rate-font-size": " $--font-size-base !default",
  // height||Other|3
  "$--rate-icon-size": " 18px !default",
  // margin||Spacing|2
  "$--rate-icon-margin": " 6px !default",
  // color||Color|0
  "$--rate-icon-color": " $--color-text-placeholder !default",

  /* DatePicke-------------------------*/
  // color||Color|0
  "$--datepicker-font-color": " $--color-text-regular !default",
  // color||Color|0
  "$--datepicker-off-font-color": " $--color-text-placeholder !default",
  // color||Color|0
  "$--datepicker-header-font-color": " $--color-text-regular !default",
  "$--datepicker-icon-color": " $--color-text-primary !default",
  "$--datepicker-border-color": " $--disabled-border-base !default",
  "$--datepicker-inner-border-color": " #e4e4e4 !default",
  // color||Color|0
  "$--datepicker-inrange-color": " $--border-color-extra-light !default",
  // color||Color|0
  "$--datepicker-inrange-hover-color": " $--border-color-extra-light !default",
  // color||Color|0
  "$--datepicker-active-color": " $--color-primary !default",
  // color||Color|0
  "$--datepicker-text-hover-color": " $--color-primary !default",
  "$--datepicker-cell-hover-color": " #fff !default",

  /* Loadin-------------------------*/
  "$--loading-spinner-size": " 42px !default",
  "$--loading-fullscreen-spinner-size": " 50px !default",

  /* Scrollba-------------------------*/
  "$--scrollbar-background-color": " rgba($--color-text-secondary, .3) !default",
  "$--scrollbar-hover-background-color": " rgba($--color-text-secondary, .5) !default",

  /* Carouse-------------------------*/
  "$--carousel-arrow-font-size": " 12px !default",
  "$--carousel-arrow-size": " 36px !default",
  "$--carousel-arrow-background": " rgba(31, 45, 61, 0.11) !default",
  "$--carousel-arrow-hover-background": " rgba(31, 45, 61, 0.23) !default",
  "$--carousel-indicator-width": " 30px !default",
  "$--carousel-indicator-height": " 2px !default",
  "$--carousel-indicator-padding-horizontal": " 4px !default",
  "$--carousel-indicator-padding-vertical": " 12px !default",
  "$--carousel-indicator-out-color": " $--border-color-hover !default",

  /* Collaps-------------------------*/
  "$--collapse-border-color": " $--border-color-lighter !default",
  "$--collapse-header-height": " 48px !default",
  "$--collapse-header-padding": " 20px !default",
  "$--collapse-header-fill": " $--color-white !default",
  "$--collapse-header-color": " $--color-text-primary !default",
  "$--collapse-header-size": " 13px !default",
  "$--collapse-content-fill": " $--color-white !default",
  "$--collapse-content-size": " 13px !default",
  "$--collapse-content-color": " $--color-text-primary !default",

  /* Transfe-------------------------*/
  "$--transfer-border-color": " $--border-color-lighter !default",
  "$--transfer-border-radius": " $--border-radius-base !default",
  // height||Other|4
  "$--transfer-panel-width": " 200px !default",
  // height||Other|4
  "$--transfer-panel-header-height": " 40px !default",
  // color||Color|0
  "$--transfer-panel-header-background-color": " $--background-color-base !default",
  // height||Other|4
  "$--transfer-panel-footer-height": " 40px !default",
  // height||Other|4
  "$--transfer-panel-body-height": " 246px !default",
  // height||Other|4
  "$--transfer-item-height": " 30px !default",
  // height||Other|4
  "$--transfer-filter-height": " 32px !default",

  /* Header
  "  --------------------------*/
  "$--header-padding": " 0 20px !default",

  /* Foote-------------------------*/
  "$--footer-padding": " 0 20px !default",

  /* Mai-------------------------*/
  "$--main-padding": " 20px !default",

  /* Timelin-------------------------*/
  "$--timeline-node-size-normal": " 12px !default",
  "$--timeline-node-size-large": " 14px !default",
  "$--timeline-node-color": " $--border-color-light !default",

  /* Break-poin-------------------------*/
  "$--sm": " 768px !default",
  "$--md": " 992px !default",
  "$--lg": " 1200px !default",
  "$--xl": " 1920px !default",
}

Object.keys