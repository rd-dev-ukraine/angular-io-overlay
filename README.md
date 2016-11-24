# angular-io-overlay

Overlay component that allows open component in popup for Angular 2.

## Motivation

!!!!!!!!!!!!!!!!!!! 😏

## Installation

````shell
npm i angular-io-overlay --save
````

## Code Example

#### [Demo](https://rd-dev-ukraine.github.io/angular-io-overlay/)

You'll need to add `OverlayModule` to your application module.

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OverlayModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
```

And then add `overlay-host` element with options where is located your component to your html:

```html
<awesomeComponent></awesomeComponent>
<overlay-host></overlay-host>
```

## API Reference

Options can be passed to an element via html attributes:

|Property         |Type   |Default                                                          |Description                                                                        |
| :-------------- | :---- | :-------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
|`mode`           |string |`date`                                                           |Changes view mode - date, datetime, time                                           |
|`disabled`       |boolean|`false`                                                          |Disables controls                                                                  |
|`showClearButton`|boolean|`true`                                                           |Show or not clear input button                                                     |
|`format`         |string | `defaultFormat = {"date": "LL","datetime": "LLL","time": "LT"};`|Changes view format that provides |


## License

This project is licensed under the MIT license. See the [LICENSE](https://github.com/rd-dev-ukraine/angular-io-overlay/blob/master/LICENSE) file for more info.