import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          ¿Ya tienes una cuenta?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Inicia sesión para una mejor experiencia.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10 border-unilen-black text-unilen-black rounded-none uppercase tracking-widest text-xs hover:bg-unilen-black hover:text-white" data-testid="sign-in-button">
            Iniciar sesión
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt