import { usePage } from '@inertiajs/react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function BookingForm() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border p-6 md:p-8">
      <form className="space-y-8">
        {/* PAYMENT */}
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-lg">Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>

            <FieldGroup>
              <Field>
                <FieldLabel>Name on Card</FieldLabel>
                <Input placeholder="John Doe" required />
              </Field>

              <Field>
                <FieldLabel>Card Number</FieldLabel>
                <Input placeholder="1234 5678 9012 3456" required />
                <FieldDescription>Enter your 16-digit card number</FieldDescription>
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Field>
                  <FieldLabel>Month</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i} value={`${i + 1}`.padStart(2, "0")}>
                          {`${i + 1}`.padStart(2, "0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Year</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      {[2024, 2025, 2026, 2027, 2028, 2029].map(y => (
                        <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>CVV</FieldLabel>
                  <Input placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>

        <FieldSeparator />

        {/* BILLING */}
        <FieldSet>
          <FieldLegend className="text-lg">Billing Address</FieldLegend>
          <FieldDescription>
            The billing address associated with your payment method
          </FieldDescription>

          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox defaultChecked />
              <FieldLabel className="font-normal">
                Same as shipping address
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>

        {/* COMMENTS */}
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>Comments</FieldLabel>
              <Textarea
                placeholder="Add any additional comments"
                className="resize-none"
              />
            </Field>
          </FieldGroup>
        </FieldSet>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button className="w-full">Confirm Booking</Button>
          <Button variant="outline" className="w-full" type="button">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default function Book() {
  const { props } = usePage()
  const { roomType, price } = props as any

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">


        {/* FORM */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Secure Checkout</h1>
          <BookingForm />
        </div>
      </div>
    </div>
  )
}
