import {
  ClientSdkReferencePage,
  generateReferenceMetadata,
  generateReferenceStaticParams,
  redirectNonexistentReferenceSection,
} from '~/features/docs/Reference.sdkPage'

const LIB_ID = 'reference_csharp_v1'
const LIB_PATH = 'csharp'
const LIB_VERSION = 'v1'
const SPEC_FILE = 'supabase_csharp_v1'

export default async function CSharpReferenceV1({
  params: { slug },
}: {
  params: { slug?: Array<string> }
}) {
  await redirectNonexistentReferenceSection(slug, SPEC_FILE, LIB_ID)

  return (
    <ClientSdkReferencePage
      libId={LIB_ID}
      libPath={LIB_PATH}
      libVersion={LIB_VERSION}
      specFile={SPEC_FILE}
    />
  )
}

export const generateStaticParams = generateReferenceStaticParams(SPEC_FILE, LIB_ID)
export const generateMetadata = generateReferenceMetadata('csharp')
