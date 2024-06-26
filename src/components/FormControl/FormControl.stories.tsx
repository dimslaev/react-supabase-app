import { FormControl } from "@/components/FormControl/FormControl";
import { TextField } from "@radix-ui/themes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export function Default() {
  return (
    <div style={{ maxWidth: "280px" }}>
      <FormControl label="Email">
        <TextField.Root placeholder="name@email.com">
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
      </FormControl>
    </div>
  );
}

export function Required() {
  return (
    <div style={{ maxWidth: "280px" }}>
      <FormControl label="Email" required>
        <TextField.Root placeholder="name@email.com">
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
      </FormControl>{" "}
    </div>
  );
}

export function Error() {
  return (
    <div style={{ maxWidth: "280px" }}>
      <FormControl
        label="Email"
        error={{ message: "This field is required", type: "required" }}
        required
      >
        <TextField.Root placeholder="name@email.com" color="red">
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
      </FormControl>{" "}
    </div>
  );
}

export function Tooltip() {
  return (
    <div style={{ maxWidth: "280px" }}>
      <FormControl label="Email" tooltip="We won't spam you">
        <TextField.Root placeholder="name@email.com">
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
      </FormControl>{" "}
    </div>
  );
}
