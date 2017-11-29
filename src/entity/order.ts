import { randomBytes as importedRandomBytes } from 'crypto'
import { promisify } from 'util'
const randomBytes = promisify(importedRandomBytes)
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	OneToOne,
	ManyToMany,
	OneToMany,
	JoinColumn,
	JoinTable,
	CreateDateColumn
} from 'typeorm'
import OrderItem from './orderItem'

@Entity()
export default class Order {
	@PrimaryGeneratedColumn('uuid') id: string

	@CreateDateColumn() created: Date

	@OneToMany(type => OrderItem, item => item.order)
	items: OrderItem[]
}
