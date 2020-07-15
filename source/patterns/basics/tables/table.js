import React from 'react';

function Table({
    children,
    cssClass
}) {
    return (
        <table className={cssClass}>
            {children}
        </table>
    );
}

export function TableHeader({
    children,
    cssClass
}) {
    return (
        <thead className={cssClass}>
           {children}
        </thead>
    );
}

export function TableBody({
    children,
    cssClass
}) {
    return (
        <tbody className={cssClass}>
           {children}
        </tbody>
    );
}

export function TableRow({
    children,
    cssClass
}) {
    return (
        <tr className={cssClass}>
           {children}
        </tr>
    );
}

export function TableHeading({
    children,
    cssClass
}) {
    return (
        <th className={cssClass}>
            {children}
        </th>
    )
};

export function TableCell({
    children,
    cssClass
}) {
    return (
        <td className={cssClass}>
            {children}
        </td>
    )
};

export default Table;