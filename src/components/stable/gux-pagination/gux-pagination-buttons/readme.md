# gux-pagination-buttons

An internal component used by the gux-pagination component.


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                | Default     |
| ------------- | -------------- | ----------- | ------------------- | ----------- |
| `currentPage` | `current-page` |             | `number`            | `undefined` |
| `layout`      | `layout`       |             | `"full" \| "small"` | `'full'`    |
| `totalPages`  | `total-pages`  |             | `number`            | `undefined` |


## Events

| Event                       | Description | Type                  |
| --------------------------- | ----------- | --------------------- |
| `internalcurrentpagechange` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [gux-pagination](..)

### Depends on

- [gux-button-slot-beta](../../../beta/gux-button-slot)
- [gux-icon](../../gux-icon)

### Graph
```mermaid
graph TD;
  gux-pagination-buttons --> gux-button-slot-beta
  gux-pagination-buttons --> gux-icon
  gux-pagination --> gux-pagination-buttons
  style gux-pagination-buttons fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
