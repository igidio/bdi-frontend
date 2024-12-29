import type {DetailTypeEnum} from "~/enums/detail_type.enum";
import type {DetailStatusEnum} from "~/enums/detail_status.enum";
import type {HeadInterface} from "~/interfaces/head.interface";

export interface DetailInterface {
	id:         number;
	type:       DetailTypeEnum;
	status:     DetailStatusEnum;
	row:        string;
	column:     number;
	value:      number;
	created_at: Date;
	updated_at: Date;
	head?:       HeadInterface;
}