import {expect, test} from "vitest";
import {render} from "vitest-browser-react";
import ContactPage from "../../pages/ContactPage.tsx";

test('renders', async () => {
  const { getByText } = render(<ContactPage />)

  await expect.element(getByText('Send Me a Message')).toBeInTheDocument()
})