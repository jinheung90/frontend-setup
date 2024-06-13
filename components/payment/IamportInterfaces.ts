export interface RequestPayAdditionalParams {
  digital?: boolean;

  vbank_due?: string;

  m_redirect_url?: string;

  app_scheme?: string;

  biz_num?: string;
}

export interface Display {
  card_quota?: number[];
}

type PG =
  | 'html5_inicis'
  | 'inicis'
  | 'kcp'
  | 'kcp_billing'
  | 'uplus'
  | 'nice'
  | 'kicc'
  | 'bluewalnut'
  | 'kakaopay'
  | 'danal'
  | 'danal_tpay'
  | 'mobilians'
  | 'payco'
  | 'paypal'
  | 'eximbay'
  | 'naverpay'
  | 'naverco'
  | 'smilepay'
  | 'alipay'
  | 'paymentwall'
  | 'tosspay'
  | 'smartro'
  | 'settle'
  | 'settle_acc'
  | 'daou'
  | 'tosspayments'
  | 'paypal_v2'
  | 'nice_v2'
  | 'smartro_v2'
  | 'ksnet';

type PaymentMethod =
  | 'card'
  | 'trans'
  | 'vbank'
  | 'phone'
  | 'paypal'
  | 'applepay'
  | 'naverpay'
  | 'samsung'
  | 'kpay'
  | 'kakaopay'
  | 'payco'
  | 'lpay'
  | 'ssgpay'
  | 'tosspay'
  | 'cultureland'
  | 'smartculture'
  | 'happymoney'
  | 'booknlife'
  | 'point'
  | 'wechat'
  | 'alipay'
  | 'unionpay'
  | 'tenpay';

interface EscrowProduct {
  id: string;
  name: string;
  code: string;
  unitPrice: number;
  quantity: number;
}

interface Card {
  direct?: {
    code: string;
    quota: number;
  };
  detail?: {
    card_code: string;

    enabled: boolean;
  }[];
}

export interface RequestPayParams extends RequestPayAdditionalParams {
  pg?: string;

  pay_method: PaymentMethod;

  escrow?: boolean;

  escrowProducts?: EscrowProduct[];

  merchant_uid: string;

  name?: string;

  amount: number;

  custom_data?: Record<any, any>;

  tax_free?: number;

  vat_amount?: number | null;

  currency?: string;

  language?: 'en' | 'ko';

  buyer_name?: string;

  buyer_tel?: string;

  buyer_email?: string;

  buyer_addr?: string;

  buyer_postcode?: string;

  confirm_url?: string;

  notice_url?: string | string[];

  customer_uid?: string;

  display?: Display;

  card?: Card;
}

export interface RequestPayAdditionalResponse {
  apply_num?: string;

  vbank_num?: string;

  vbank_name?: string;

  vbank_holder?: string | null;

  vbank_date?: string;
}

export interface RequestPayResponse extends RequestPayAdditionalResponse {
  success?: boolean;

  error_code?: string;

  error_msg?: string;

  imp_uid?: string | null;

  merchant_uid: string;
  pay_method?: PaymentMethod;

  paid_amount?: number;

  status?: string;

  name?: string;

  pg_provider?: PG;

  embb_pg_provider?:
    | 'naverpay'
    | 'kakaopay'
    | 'payco'
    | 'samsungpay'
    | 'ssgpay'
    | 'lpay';

  pg_tid?: string;

  buyer_name?: string;

  buyer_email?: string;

  buyer_tel?: string;

  buyer_addr?: string;

  buyer_postcode?: string;

  custom_data?: string;

  paid_at?: string;

  receipt_url?: string;
}

export type RequestPayResponseCallback = (response: RequestPayResponse) => void;

type PaypalUI = 'paypal-spb' | 'paypal-rt';

export interface PaypalRequestPayParams extends RequestPayParams {
  pg: string;
  pay_method: 'paypal';

  country?: string;

  buyer_first_name?: string;

  buyer_last_name?: string;

  products?: {
    id?: string;
    name?: string;
    code?: string;
    unitPrice?: number;
    quantity?: number;
    tag?: string;
  }[];

  currency?: string;
}

export interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void;
  loadUI: (
    type: PaypalUI,
    params: PaypalRequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void;
  updateLoadUIRequest: (type: PaypalUI, params: PaypalRequestPayParams) => void;
}

declare global {
  interface Window {
    IMP?: Iamport;
  }
}
