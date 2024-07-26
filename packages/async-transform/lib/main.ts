import {Transform, type TransformCallback, type TransformOptions} from "node:stream"

export interface AsyncTransformOptions extends TransformOptions {
  atransform?(this: AsyncTransform, chunk: unknown): Promise<void>
}

export class AsyncTransform extends Transform {
  constructor(opts?: AsyncTransformOptions) {
    super(opts)
    if (opts) {
      this.#atransform = opts.atransform
    }
  }

  _transform(ch: unknown, _: BufferEncoding, cb: TransformCallback): void {
    this._atransform(ch).then(() => cb()).catch(cb)
  }

  #atransform: AsyncTransformOptions["atransform"] = undefined

  async _atransform(ch: unknown): Promise<void> {
    if (!this.#atransform) {
      throw new Error("Not implemented")
    }
    this.#atransform(ch)
  }
}
