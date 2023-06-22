import StyleDictionary from 'style-dictionary'

import config from './sd.config.js'

StyleDictionary.registerFormat({
  name: 'custom/typed-ts',
  formatter: function ({ dictionary, options }, _, { destination }) {
    //@TODO: find a better way to get tokenType
    const pattern = /(.*?)\.ts/
    const match = pattern.exec(destination)
    const tokenType = match[1].replace(/-./g, (x) => x[1].toUpperCase())

    const typeObjectName = tokenType.endsWith('s') ? tokenType : tokenType + 's'

    let objectEntries = []

    for (let token of dictionary.allTokens) {
      let value = JSON.stringify(token.value)
      if (options.outputReferences) {
        if (dictionary.usesReference(token.original.value)) {
          const refs = dictionary.getReferences(token.original.value)
          refs.forEach((ref) => {
            value = value.replace(ref.value, () => `${ref.name}`)
          })
        }
      }

      objectEntries.push([token.name, value])
    }

    return `// @INFO: Generated file, do not edit directly

export const ${typeObjectName} = {
${objectEntries.map(([key, value]) => `  '${key}': ${value},`).join('\n')}
}

export type Ms${typeObjectName.replace(/^\w/, (m) => m.toUpperCase())} = typeof ${typeObjectName}
`
  },
})
StyleDictionary.extend(config).buildAllPlatforms()
