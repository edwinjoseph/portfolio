import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/d.ts/documents';
import ResolvedApi from 'prismic-javascript/d.ts/ResolvedApi';
import { CMSClient, ContentHandler } from '../types';

export default class PrismicClient<T = Document> implements CMSClient<T> {
  private client: ResolvedApi | undefined;

  constructor(private readonly endpoint: string, private readonly accessToken: string) {}

  public async getContent<U>(
    pageType: string,
    pageUID: string,
    ref: string,
    contentHandler: ContentHandler<U>): Promise<U> {
    const client = await this.getClient();
    const response = await client.getByUID(pageType, pageUID, { ref });
    return contentHandler(response);
  }

  private async getClient(): Promise<ResolvedApi> {
    if (this.client !== undefined) {
      return this.client;
    }
    this.client = await Prismic.api(this.endpoint, {
      accessToken: this.accessToken
    });

    return this.client;
  }
}
