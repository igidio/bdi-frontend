import type {DetailInterface, UserInterface} from "~/interfaces";

export interface ReservationInterface {
	id:         number;
	is_active:  boolean;
	created_at: Date;
	updated_at: Date;
	detail?:     DetailInterface;
	user?: UserInterface;
}