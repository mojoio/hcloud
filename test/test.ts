import { expect, tap } from 'tapbundle'
import * as hcloud from '../ts/index'

tap.test('first test', async () => {
  console.log(hcloud.standardExport)
})

tap.start()
