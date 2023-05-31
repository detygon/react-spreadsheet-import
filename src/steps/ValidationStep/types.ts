import type { Info } from "../../types"

export type Meta = { __index: string; __errors?: Error | null }
export type Error = { [key: string]: Info }
export type Errors = { [id: string]: Error }
export type FormattedCell = { v: string | number; t?: string; s?: any }
export type FormattedCells = FormattedCell[]
