'use client';

import {
    Table as HeroTable,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Selection,
    SortDescriptor,
} from '@heroui/table';
import { ReactNode, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface Column<T> {
    key: keyof T | string;
    label: string;
    render?: (item: T) => ReactNode;
    className?: string;
    sortable?: boolean;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    className?: string;
    onRowAction?: (key: string) => void;
    onSelectionChange?: (keys: Selection) => void;
    selectionMode?: 'none' | 'single' | 'multiple';
    selectedKeys?: Selection;
    emptyMessage?: string;
    sortDescriptor?: SortDescriptor;
    onSortChange?: (descriptor: SortDescriptor) => void;
}

export function Table<T extends { id: string }>({
    data,
    columns,
    className,
    onRowAction,
    onSelectionChange,
    selectionMode = 'none',
    selectedKeys,
    emptyMessage = 'No data available',
    sortDescriptor,
    onSortChange,
}: TableProps<T>) {
    const headerColumns = useMemo(() => {
        return columns.map(column => ({
            key: column.key,
            label: column.label,
            allowsSorting: column.sortable,
        }));
    }, [columns]);

    const renderCell = useMemo(() => {
        return (item: T, columnKey: string | number) => {
            const column = columns.find(col => col.key === columnKey);
            if (column?.render) {
                return column.render(item);
            }
            return getKeyValue(item, columnKey);
        };
    }, [columns]);

    return (
        <HeroTable
            aria-label="Data table"
            className={cn('min-h-[400px]', className)}
            selectionMode={selectionMode}
            selectedKeys={selectedKeys}
            onSelectionChange={onSelectionChange}
            onRowAction={onRowAction}
            sortDescriptor={sortDescriptor}
            onSortChange={onSortChange}
            bottomContentPlacement="outside"
        >
            <TableHeader columns={headerColumns}>
                {(column) => (
                    <TableColumn
                        key={column.key}
                        allowsSorting={column.allowsSorting}
                        className={cn(
                            'text-sm font-semibold',
                            columns.find(c => c.key === column.key)?.className
                        )}
                    >
                        {column.label}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody
                items={data}
                emptyContent={emptyMessage}
            >
                {(item) => (
                    <TableRow key={item.id} className="group">
                        {(columnKey) => (
                            <TableCell className="py-4">
                                {renderCell(item, columnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </HeroTable>
    );
}