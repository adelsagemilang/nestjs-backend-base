import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity("users", { schema: "public" })
export class Users {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: number

    @Index("name-idx")
    @Column("character varying", {
      name: "name",
      nullable: true,
      length: 50,
    })
    name: string

    @Column("timestamp with time zone", { name: "created_at", nullable: true })
    public createdAt: Date | null;

    @Column("timestamp with time zone", { name: "updated_at", nullable: true })
    public updatedAt: Date | null;
}