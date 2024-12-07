export interface UserInterface {
	id: number;
	username: string;
	email: string;
	role: string;
	is_active: boolean;
	created_at: Date;
	modified_at: Date;
	token: string;
}