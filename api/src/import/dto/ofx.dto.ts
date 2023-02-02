export class OfxDto {
  ofx: ofx;
  header: header;
}

class ofx {
  SIGNONMSGSRSV1: SONRS;
  BANKMSGSRSV1: BANKMSGSRSV1;
}

class header {
  OFXHEADER: string;
  DATA: string;
  VERSION: string;
  SECURITY: string;
  ENCODING: string;
  CHARSET: string;
  COMPRESSION: string;
  OLDFILEUID: string;
  NEWFILEUID: string;
}

class SONRS {
  STATUS: STATUS;
  DTSERVER: string;
  LANGUAGE: string;
  FI: FI;
}

class STATUS {
  CODE: string;
  SEVERITY: string;
}

class FI {
  ORG: string;
  FID: string;
}

class BANKMSGSRSV1 {
  CURDEF: string;
  BANKACCTFROM: BANKACCTFROM;
  BANKTRANLIST: BANKTRANLIST;
  LEDGERBAL: LEDGERBAL;
  BALLIST: BALObject;
}

class BALObject {
  BAL: BAL;
}

class BAL {
  NAME: string;
  DESC: string;
  BALTYPE: string;
  VLUE: string;
}

class LEDGERBAL {
  BALAMT: string;
  DTASOF: string;
}

class BANKTRANLIST {
  DTSTART: string;
  DTEND: string;
  STMTTRN: STMTTRN[];
}

class STMTTRN {
  TRNTYPE: string;
  DTPOSTED: string;
  TRNAMT: string;
  FITID: string;
  MEMO: string;
}

class BANKACCTFROM {
  BANKID: string;
  BRANCHID: string;
  ACCTID: string;
  ACCTTYPE: string;
}
