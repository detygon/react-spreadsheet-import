import type { Data } from "../../../types"
import type { Meta, FormattedCell } from "../types"
import * as XLSX from "xlsx-js-style"

export const formatCells = <T extends string>(data: (Data<T> & Partial<Meta>)[]): FormattedCell[] => {
  const headers = Object.keys(data[0])
    .filter((key) => key !== "__errors" && key !== "__index")
    .map((key) => ({ v: key }))

  const rows: any[] = data.map((row) => {
    const { __errors, __index, ...values } = row

    return Object.entries(values).map(([key, value]) => {
      const hasError = row.__errors && Object.keys(row.__errors).includes(key)
      const errorColorMap = new Map([
        ["info", "0d6efd"],
        ["warning", "ffc107"],
        ["error", "dc3545"],
      ])

      return hasError
        ? {
            v: value,
            t: "s",
            s: { fill: { fgColor: { rgb: row.__errors && errorColorMap.get(row.__errors[key].level) } } },
          }
        : { v: value }
    })
  })

  return [headers, ...rows]
}

export const exportToExcel = (rows: FormattedCell[][], fileName: string) => {
  const wb = XLSX.utils.book_new()
  const ws = XLSX.utils.aoa_to_sheet(rows)
  XLSX.utils.book_append_sheet(wb, ws, "DEMANDE_EDITION")
  XLSX.writeFile(wb, `${fileName}.xlsx`)
}
