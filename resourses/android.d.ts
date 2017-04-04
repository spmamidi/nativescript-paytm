
declare module com {
	export module paytm {
		export module pgsdk {
			export class BuildConfig {
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class Log {
				public static e(param0: string, param1: string): void;
				public static v(param0: string, param1: string): void;
				public static i(param0: string, param1: string): void;
				public static w(param0: string, param1: string): void;
				public static w(param0: string, param1: string, param2: javalangThrowable): void;
				public static d(param0: string, param1: string): void;
				public static d(param0: string, param1: string, param2: javalangThrowable): void;
				public static setEnableDebugLog(param0: boolean): void;
				public constructor();
				public static e(param0: string, param1: string, param2: javalangThrowable): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmCancel {
				public mMerchantId: string;
				public mOrderId: string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmCancelTransaction {
				/**
				 * Constructs a new instance of the com.paytm.pgsdk.PaytmCancelTransaction interface with the provided implementation.
				 */
				public constructor(implementation: {
					onCancellationSuccess(): void;
					onCancellationFailure(): void;
				});
				public onCancellationFailure(): void;
				public onCancellationSuccess(): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmClientCertificate {
				public mPassword: string;
				public mFileName: string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmConstants {
				public static MERCHANT_ID: string;
				public static TRANSACTION_ID: string;
				public static BANK_TRANSACTION_ID: string;
				public static STATUS: string;
				public static RESPONSE_CODE: string;
				public static RESPONSE_MSG: string;
				public static TRANSACTION_DATE: string;
				public static GATEWAY_NAME: string;
				public static BANK_NAME: string;
				public static PAYMENT_MODE: string;
				public static TRANSACTION_TYPE: string;
				public static IS_CHECKSUM_VALID: string;
				public static CHECKSUM: string;
				public static ORDER_ID: string;
				public static TRANSACTION_AMOUNT: string;
				public static REFUND_AMOUNT: string;
				public static EMPTY: string;
				public static PARAMETERS: string;
				public static HIDE_HEADER: string;
				public static SEND_ALL_CHECKSUM_RESPONSE_PARAMETERS_TO_PG_SERVER: string;
				public constructor();
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmMerchant {
				public mMerchantIdentifier: string;
				public mChannelId: string;
				public mIndustryTypeId: string;
				public mWebsite: string;
				public mTheme: string;
				public mChecksumGenerationURL: string;
				public mChecksumVerificationURL: string;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
				public constructor(param0: string, param1: string);
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmOrder {
				public mOrderId: string;
				public mCustomerId: string;
				public mTransactionAmount: string;
				public mEmail: string;
				public mMobileNumber: string;
				public constructor(param0: any);
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
				public getRequestParamMap(): any;
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
import androidviewKeyEvent = android.view.KeyEvent;
import androidwidgetProgressBar = android.widget.ProgressBar;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmPGActivity {
				public mProgress: androidwidgetProgressBar;
				public onCreate(param0: androidosBundle): void;
				public onBackPressed(): void;
				public onDestroy(): void;
				public onKeyDown(param0: number, param1: androidviewKeyEvent): boolean;
				public constructor();
			}
			export module PaytmPGActivity {
				export class AuthenticatorTask {
					public doInBackground(param0: native.Array<string>): string;
					public onPostExecute(param0: string): void;
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.paytm.pgsdk.PaytmClientCertificate.d.ts" />
/// <reference path="./com.paytm.pgsdk.PaytmMerchant.d.ts" />
/// <reference path="./com.paytm.pgsdk.PaytmOrder.d.ts" />
/// <reference path="./com.paytm.pgsdk.PaytmPaymentTransactionCallback.d.ts" />
/// <reference path="./com.paytm.pgsdk.PaytmRefundCallback.d.ts" />
/// <reference path="./com.paytm.pgsdk.PaytmStatusQueryCallback.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmPGService {
				public mOrder: com.paytm.pgsdk.PaytmOrder;
				public mMerchant: com.paytm.pgsdk.PaytmMerchant;
				public mCertificate: com.paytm.pgsdk.PaytmClientCertificate;
				public mCASURL: string;
				public mCancelTransactionURL: string;
				public mPGURL: string;
				public mPaymentTransactionCallback: com.paytm.pgsdk.PaytmPaymentTransactionCallback;
				public mRefundCallback: com.paytm.pgsdk.PaytmRefundCallback;
				public mStatusQueryCallback: com.paytm.pgsdk.PaytmStatusQueryCallback;
				public startPaymentTransaction(param0: androidcontentContext, param1: boolean, param2: boolean, param3: com.paytm.pgsdk.PaytmPaymentTransactionCallback): void;
				public static getService(): com.paytm.pgsdk.PaytmPGService;
				public stopService(): void;
				public static getStagingService(): com.paytm.pgsdk.PaytmPGService;
				public initialize(param0: com.paytm.pgsdk.PaytmOrder, param2: com.paytm.pgsdk.PaytmClientCertificate): void;
				public enableLog(param0: androidcontentContext): void;
				public static getProductionService(): com.paytm.pgsdk.PaytmPGService;
				public constructor();
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmPaymentTransactionCallback {
				/**
				 * Constructs a new instance of the com.paytm.pgsdk.PaytmPaymentTransactionCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onTransactionSuccess(param0: androidosBundle): void;
					onTransactionFailure(param0: string, param1: androidosBundle): void;
					networkNotAvailable(): void;
					clientAuthenticationFailed(param0: string): void;
					someUIErrorOccurred(param0: string): void;
					onErrorLoadingWebPage(param0: number, param1: string, param2: string): void;
					onBackPressedCancelTransaction(): void;
				});
				public networkNotAvailable(): void;
				public onTransactionSuccess(param0: androidosBundle): void;
				public someUIErrorOccurred(param0: string): void;
				public onTransactionFailure(param0: string, param1: androidosBundle): void;
				public onBackPressedCancelTransaction(): void;
				public clientAuthenticationFailed(param0: string): void;
				public onErrorLoadingWebPage(param0: number, param1: string, param2: string): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmRefund {
				public mTransactionId: string;
				public mOrderId: string;
				public mRefundAmount: string;
				public mTransactioType: string;
				public mComments: string;
				public mChecksumHash: string;
				public mMerchantId: string;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmRefundCallback {
				/**
				 * Constructs a new instance of the com.paytm.pgsdk.PaytmRefundCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onRefundCompleted(param0: androidosBundle): void;
					onRefundFailed(param0: string): void;
				});
				public onRefundFailed(param0: string): void;
				public onRefundCompleted(param0: androidosBundle): void;
			}
		}
	}
}

import javanetSocket = java.net.Socket;
import javanetInetAddress = java.net.InetAddress;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.paytm.pgsdk.PaytmClientCertificate.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmSSLSocketFactory {
				public constructor(param0: androidcontentContext, param1: com.paytm.pgsdk.PaytmClientCertificate);
				public createSocket(param0: javanetSocket, param1: string, param2: number, param3: boolean): javanetSocket;
				public createSocket(param0: javanetInetAddress, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;
				public getDefaultCipherSuites(): native.Array<string>;
				public createSocket(param0: string, param1: number): javanetSocket;
				public createSocket(param0: javanetInetAddress, param1: number): javanetSocket;
				public getSupportedCipherSuites(): native.Array<string>;
				public createSocket(param0: string, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmStatusQuery {
				public mOrderId: string;
				public mMerchantId: string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmStatusQueryCallback {
				/**
				 * Constructs a new instance of the com.paytm.pgsdk.PaytmStatusQueryCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onStatusQueryCompleted(param0: androidosBundle): void;
					onStatusQueryFailed(param0: string): void;
				});
				public onStatusQueryFailed(param0: string): void;
				public onStatusQueryCompleted(param0: androidosBundle): void;
			}
		}
	}
}

import javalangException = java.lang.Exception;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmUtility {
				public static getURLEncodedJSONString(param0: androidosBundle): string;
				public static debugLog(param0: string): void;
				public static printStackTrace(param0: javalangException): void;
				public static getStringFromBundle(param0: androidosBundle): string;
				public static isNetworkAvailable(param0: androidcontentContext): boolean;
				public static getURLEncodedStringFromBundle(param0: androidosBundle): string;
				public static getJSONString(param0: androidosBundle): string;
				public constructor();
			}
		}
	}
}

import androidwebkitWebView = android.webkit.WebView;
import androidgraphicsBitmap = android.graphics.Bitmap;
import androidwebkitSslErrorHandler = android.webkit.SslErrorHandler;
import androidnethttpSslError = android.net.http.SslError;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.http.SslError.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.webkit.SslErrorHandler.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module paytm {
		export module pgsdk {
			export class PaytmWebView {
				public constructor(param0: androidcontentContext, param1: androidosBundle);
			}
			export module PaytmWebView {
				export class PaytmJavaScriptInterface {
					public processResponse(param0: string): void;
				}
				export class PaytmWebViewClient {
					public onReceivedError(param0: androidwebkitWebView, param1: number, param2: string, param3: string): void;
					public onReceivedSslError(param0: androidwebkitWebView, param1: androidwebkitSslErrorHandler, param2: androidnethttpSslError): void;
					public onPageStarted(param0: androidwebkitWebView, param1: string, param2: androidgraphicsBitmap): void;
					public onPageFinished(param0: androidwebkitWebView, param1: string): void;
				}
			}
		}
	}
}

