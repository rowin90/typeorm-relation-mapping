import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne} from "typeorm"
import {Department} from "./Department";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;

    @ManyToOne(()=> Department)
    department:Department
}
