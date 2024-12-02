import type {DetailInterface} from "~/interfaces";
import unique_data_from_array from "~/helpers/unique_data_from_array";

interface cellInterface {
	val: number
	col: number
	row: string
	//section?: sectionEnum
	//status?: statusEnum
	info: {
		description: string
	}
}

interface sectorInterface {
	name?: string,
	sector: string,
	rows: string[],
	additional_start_rows?: string[],
	additional_end_rows?: string[],
	cells: cellInterface[]
}

export default function create_matrix(data: DetailInterface[]):DetailInterface[][] {
	const grouped_data: { [key: string]: null[] | any[] } = {}

	const rows = unique_data_from_array(data as any, 'row')

	data.forEach((e: DetailInterface) => {
			if (!grouped_data[e.row]) grouped_data[e.row] = []
			grouped_data[e.row]![e.column - 1] = e
		}
	)

	const max_row = Math.max(...data.map(e => e.column))
	const max_col_index = rows.length
	const result = []

	for (let col_index = 0; col_index < max_col_index; col_index++) {
		const col = rows[col_index]
		const col_array = []
		for (let row_index = 0; row_index < max_row; row_index++) {
			if (!grouped_data[col]) {
				grouped_data[col] = [null]
			}

			if (!grouped_data[col]![row_index]) {
				grouped_data[col]![row_index] = null
			}
			col_array.push(grouped_data[col]![row_index])
		}
		result.push(col_array)
	}

	return result
}