# react-nested-dropdown

[![License](https://badgen.net/badge/License/MIT/blue)](https://github.com/SupraSmooth/react-nested-dropdown/blob/master/LICENSE)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@suprasmooth\/react-nested-dropdown)
![npm](https://img.shields.io/npm/v/@suprasmooth\/react-nested-dropdown)

Create advanced nested dropdowns with React and TypeScript.\
Customize the look to your own needs using the different component props.

![Example](https://user-images.githubusercontent.com/18029247/222921697-84e5435a-cc42-4cdb-be38-503b4f87257f.png)
(The screenshot shows custom applied styles)

## Usage

Install the package using NPM:

```npm
npm install @suprasmooth/react-nested-dropdown
```

Import the package and the styles into your React app.\
The styles are scoped and should not be conflicting with your own styles.

```typescript
import { NestedDropdown } from '@suprasmooth/react-nested-dropdown';

import '@suprasmooth/react-nested-dropdown/dist/style.css';
```

## Properties and Settings

The `NestedDropdown` component receives a `menu` prop wich is an array of items typed as `MenuItem`.

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
 children?: MenuItem[]; // also known as the submenu items
};
```

Play with the different properties to get the output you want. There are almost no restrictions.

> There is no limit on how many children you can pass to the NestedDropdown component.

## Example

You can pass your own children element to the `NestedDropdown` component or you can use the `NestedDropdownButton` component as the dropdown trigger element, as seen in the following example.

```typescript
import {
    NestedDropdown,
    MenuItemType,
    NestedDropdownStructure,
    NestedDropdownButton
} from '@suprasmooth/react-nested-dropdown';

import '@suprasmooth/react-nested-dropdown/dist/style.css';

const DropdownMenu = return(
    <NestedDropdown
    menu={
     [
      {
       key: '0',
       label: 'Link 1',
       className: 'px-3 py-1',
       suffixedComponent: <span>&nbsp;{'>'}&nbsp;</span>,
       children: [
        {
         key: '0-1',
         label: 'Link 1-1',
         className: 'px-3 py-1',
        },
       ],
      },
      {
       key: '1',
       type: MenuItemType.Separator,
      },
      {
       key: '2',
       label: 'Link 2',
       className: 'px-3 py-1',
       prefixedComponent: <span>Prefix:&nbsp;</span>,
       children: [
        {
         key: '2-0',
         label: 'Link 2-1',
         className: 'px-3 py-1',
        },
        {
         key: '2-1',
         type: MenuItemType.Separator,
        },
        {
         key: '2-2',
         type: MenuItemType.Label,
         label: (
          <span className="font-bold">
           Headline
          </span>
         ),
         className: 'px-3 py-1',
        },
        {
         key: '2-3',
         label: 'Link 2-2',
         className: 'px-3 py-1',
         children: [
          {
           key: '3',
           label: 'Link 3-1',
           className: 'px-3 py-1',
          },
         ],
        },
       ],
      },
     ] as NestedDropdownStructure
    }
   >
    <NestedDropdownButton
     className="px-3 py-1"
     additionalStyles={{ backgroundColor: 'red' }}
    >
     Dropdown
    </NestedDropdownButton>
   </NestedDropdown>
);
```
