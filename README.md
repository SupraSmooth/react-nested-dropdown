# react-nested-dropdown

## Create advanced nested dropdowns with React and TypeScript

## Usage

Install the package using NPM:

``` bash
npm install @suprasmooth/react-nested-dropdown
```

Import the package and the styles into your React app.<br>The styles are scoped and should not be conflicting with your own styles.

```typescript
import { NestedDropdown } from '@suprasmooth/react-nested-dropdown';

import '@suprasmooth/react-nested-dropdown/dist/style.css';
```

## Types and Settings explained

```typescript
export type MenuItem = {
 key: Key; // used for rendering menu items
 type?: MenuItemType; // see MenuItemType enum for possible values
 prefixedComponent?: JSX.Element | string; // component to include in font of the menu item
 label?: JSX.Element | string; // the label for the menu item itself
 suffixedComponent?: JSX.Element | string; // component to include after the menu item
 className?: string; // add additional classes here
 tooltip?: string; // basic html tooltip for the menu item
 href?: string; // link to an external page
 isDisabled?: boolean; // disable the menu item
 onClick?: () => void; // called when the menu item is clicked
 children?: MenuItem[];
};
```

Play with the different properties to get the output you want. There are almost no restrictions.
<br><br>
> Info: There is no limit on how many children you can pass to the NestedDropdown component.

## Example

```typescript
import { NestedDropdown, MenuItemType, NestedDropdownStructure } from '@suprasmooth/react-nested-dropdown';

import '@suprasmooth/react-nested-dropdown/dist/style.css';

const DropdownMenu =
return(
    <NestedDropdown
        menu={
        [
            {
                key: '0',
                label: 'Link 1',
                children: [
                {
                    key: '0-1',
                    label: 'Link 1-1',
                },{
                    key: '1',
                    label: 'Link 1-2',
                },
            ],
        }, {
            key: '1',
            label: 'Link 2',
            children: [
                {
                    key: '1-1',
                    label: 'Link 2-1',
                },{
                    key: '1-2',
                    type: MenuItemType.Separator,
                },{
                    key: '1-3',
                    type: MenuItemType.Label,
                    label: 'With Headlines',
                },{
                    key: '1-4',
                    label: 'Link 2-2',
                    children: [
                        {
                            key: '2-1',
                            label: 'Link 3-1',
                        },
                    ],
                },
            ],
            },
        ] as NestedDropdownStructure }
    >
        <p>Dropdown</p>
    </NestedDropdown>
);
```
