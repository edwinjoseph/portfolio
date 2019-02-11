import { Request } from 'express';
import get from 'lodash/get';
import { CMSFooter, CMSHeader, CMSPage } from '../../../common/models/cms/types';
import { CMS, Model, PageHead, PageModel, PageSocial } from './types';

export default class DefaultPageModel implements PageModel {
  private path: string | null = null;
  private route: string | null = null;
  private userAgent: IUAParser.IResult | null = null;
  private cmsHeader: CMSHeader | null = null;
  private cmsPage: CMSPage | null = null;
  private cmsFooter: CMSFooter | null = null;

  public setPath(value: string): PageModel {
    this.path = value;
    return this;
  }

  public setRoute(value: string): PageModel {
    this.route = value;
    return this;
  }

  public setUserAgent(value: IUAParser.IResult): PageModel {
    this.userAgent = value;
    return this;
  }

  public setCMSHeader(value: CMSHeader): PageModel {
    this.cmsHeader = value;
    return this;
  }

  public setCMSPage(value: CMSPage): PageModel {
    this.cmsPage = value;
    return this;
  }

  public setCMSFooter(value: CMSFooter): PageModel {
    this.cmsFooter = value;
    return this;
  }

  public build(req: Request): Model {
    return {
      head: this.constructHead(req),
      client: {
        canonicalUrl: this.constructCanonicalUrl(req),
        cms: this.constructCMS(),
        userAgent: this.userAgent,
      }
    };
  }

  private constructCanonicalUrl(req: Request): string {
    const hostname = req.hostname;
    return `${hostname}${this.constructPath()}`;
  }

  private constructSocial(req: Request): PageSocial {
    const defaultTitle = this.constructPageTitle();
    const title = get(this.cmsPage, 'meta.socialTitle', defaultTitle);

    const defaultDescription = this.constructPageDescription();
    const description = get(this.cmsPage, 'meta.socialDescription', defaultDescription);

    const image = get(this.cmsPage, 'meta.socialImage', null);

    return {
      url: this.constructCanonicalUrl(req),
      title,
      description,
      image,
    };
  }

  private constructHead(req: Request): PageHead {
    return {
      title: this.constructPageTitle(),
      description: this.constructPageDescription(),
      social: this.constructSocial(req),
      canonicalUrl: this.constructCanonicalUrl(req),
    };
  }

  private constructCMS(): CMS {
    return {
      header: this.cmsHeader,
      page: this.cmsPage,
      footer: this.cmsFooter,
    };
  }

  private constructPageTitle(): string {
    return get(this.cmsPage, 'meta.title', 'Edwin Joseph | Portfolio');
  }

  private constructPageDescription(): string {
    return get(this.cmsPage, 'meta.description', '');
  }

  private constructPath(): string {
    if (!this.path) {
      return '/';
    }
    return this.path.endsWith('/') && this.path.length > 1 ? this.path.slice(0, -1) : this.path;
  }
}
