export enum MediaTypeEnum {
  IMG = 'IMG',
  VOD = 'VOD',
}

export enum RoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum AccountStatusEnum {
  ACTIVE = 'ACTIVE',
  UNACTIVE = 'UNACTIVE',
  BLOCKED = 'BLOCKED',
}

export enum NotificationEnum {
  MES = 'MES',
  POST = 'POST',
  FOLLOW = 'FOLLOW',
  COMMENT = 'COMMENT',
  REACTION = 'REACTION',
}

export enum MerchantStatusEnum {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export enum ProductVariationEnum {
  COLOR = 'COLOR',
  SIZE = 'SIZE',
}

export enum OrderStatusEnum {
  CREATED = 'CREATED',
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
}

export enum PaymentMethodEnum {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  PAYPAL = 'PAYPAL',
  STRIPE = 'STRIPE',
  CASH = 'CASH',
}

export enum PaymentStatusEnum {
  CREATED = 'CREATED',
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
  REFUNDED = 'REFUNDED',
}

export enum ReactionTypeEnum {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
  LOVE = 'LOVE',
  HAHA = 'HAHA',
  WOW = 'WOW',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
}
