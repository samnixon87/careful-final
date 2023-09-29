import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface eventsAttributes {
  id: string;
  payload?: object;
  alert_id?: string;
  task_instance_id?: string;
  visit_id?: string;
  caregiver_id?: string;
  payload_as_text?: string;
  rejected_event_id?: string;
  observation_event_id?: string;
  timestamp?: Date;
  event_type?: string;
  care_recipient_id?: string;
}

@Table({ tableName: "events", timestamps: false })
export class events
  extends Model<eventsAttributes, eventsAttributes>
  implements eventsAttributes
{
  @Column({ primaryKey: true, type: DataType.CHAR(36) })
  id!: string;

  @Column({ allowNull: true, type: DataType.JSON })
  payload?: object;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  alert_id?: string;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  task_instance_id?: string;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  visit_id?: string;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  caregiver_id?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  payload_as_text?: string;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  rejected_event_id?: string;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  observation_event_id?: string;

  @Column({ allowNull: true, type: DataType.DATE })
  timestamp?: Date;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  event_type?: string;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  care_recipient_id?: string;
}
