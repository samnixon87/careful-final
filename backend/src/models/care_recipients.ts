import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface care_recipientsAttributes {
  id: string;
  name?: string;
}

@Table({
  tableName: "care_recipients",
  timestamps: false,
  modelName: "care_recipients",
})
export class care_recipients
  extends Model<care_recipientsAttributes, care_recipientsAttributes>
  implements care_recipientsAttributes
{
  @Column({ primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;
}
