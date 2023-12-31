import ColumnTypeEnum from '../constants/column-type';

type TableColumnType = keyof typeof ColumnTypeEnum;

// 表每列定义
export interface TableColumn {
  // 数据库设计时需要
  name: string;
  type: TableColumnType;
  comment?: string;
  length?: number;
  default?: string;
  notNull?: boolean;
  primaryKey?: boolean;
  unique?: boolean;
  unsigned?: boolean;
  zeroFill?: boolean;
  autoIncrement?: boolean;

  // 额外补充
  createRequired: boolean;
  updateRequired: boolean;
  pageQuery: boolean;
  pageItemRespInclude: boolean;
  detailRespInclude: boolean;
}

export interface AdvancedTableColumn extends TableColumn {
  camelName: string;
  pascalName: string;
  upperName: string;
  doType: string;
  voType: string;
}

// 表定义
export interface Table {
  no: string;
  name: string;
  columns: TableColumn[];
  comment: string;
  module: string;
  rootPackageName: string;
  apiPrefix: string;
  filepathMap: Record<string, string>;
}
