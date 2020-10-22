/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { useMemo } from 'react'
import { computeLayout } from './compute'

export const useCalendarLayout = ({
    width,
    height,
    from,
    to,
    direction,
    yearSpacing,
    monthSpacing,
    daySpacing,
    align,
}) =>
    useMemo(
        () =>
            computeLayout({
                width,
                height,
                from,
                to,
                direction,
                yearSpacing,
                monthSpacing,
                daySpacing,
                align,
            }),
        [width, height, from, to, direction, yearSpacing, monthSpacing, daySpacing, align]
    )
