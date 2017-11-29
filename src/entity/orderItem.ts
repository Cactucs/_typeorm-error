import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToMany,
	OneToMany
} from 'typeorm'
import Order from './order'

@Entity()
export default class OrderItem {
	@PrimaryGeneratedColumn('uuid') id: string

	@Column('smallint') amount: number

	@OneToMany(() => Order, order => order.items)
	order: Order
}
