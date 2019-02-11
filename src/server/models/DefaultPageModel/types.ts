import { Request } from 'express';
import { CMSFooter, CMSHeader, CMSImage, CMSPage } from '../../../common/models/cms/types';

export interface PageSocial {
  url: string | null;
  title: string | null;
  description: string | null;
  image: CMSImage | null;
}

export interface PageHead {
  title: string | null;
  description: string | null;
  social: PageSocial;
  canonicalUrl: string | null;
}

export interface CMS {
  header: CMSHeader | null;
  page: CMSPage | null;
  footer: CMSFooter | null;
}

export interface Client {
  canonicalUrl: string | null;
  cms: CMS;
  userAgent: IUAParser.IResult | null;
}

export interface Model {
  head: PageHead;
  client: Client;
}

export interface PageModel {
  setPath(value: string): PageModel;
  setRoute(value: string): PageModel;
  setUserAgent(value: IUAParser.IResult): PageModel;
  setCMSHeader(value: CMSHeader): PageModel;
  setCMSPage(value: CMSPage): PageModel;
  setCMSFooter(value: CMSFooter): PageModel;
  build(req: Request): Model;
}
