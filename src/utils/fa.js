/** تبدیل رقم‌های عربی/لاتین به فارسی */
export function toFa(value) {
  return String(value).replace(/[0-9]/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
}

/** شماره دو رقمی فارسی: 1 -> ۰۱ */
export function pad2(value) {
  return toFa(String(value).padStart(2, '0'));
}
