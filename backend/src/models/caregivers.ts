import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface caregiversAttributes {
  id: string;
  first_name?: string;
  last_name?: string;
}

@Table({ tableName: "caregivers", timestamps: false, modelName: "caregivers" })
export class caregivers
  extends Model<caregiversAttributes, caregiversAttributes>
  implements caregiversAttributes
{
  @Column({ primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  first_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  last_name?: string;
}
