import React from "react";
import {
  EmptyState,
  Spacing,
  Notification,
  TextButton,
} from "@valkdigital/ui-kit";
import { ScrollView } from "react-native";

interface EmptyStatesProps {}

const EmptyStates: React.FC<EmptyStatesProps> = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <EmptyState
        heading="Not logged in"
        content="Please login to view your reservations."
        buttons={[{ label: "Primary", onPress: () => console.log("Primary") }]}
        style={{ padding: Spacing.sp2 }}
      />
      <EmptyState
        heading="No rooms available"
        content="Add a new space by pressing the button below."
        buttons={[
          { label: "Short label", onPress: () => console.log("Short label") },
          {
            label: "Longer label stretches both buttons",
            onPress: () => console.log("Longer label"),
          },
        ]}
        style={{ padding: Spacing.sp2 }}
      />
      <EmptyState
        heading="Page not found"
        content="Something went wrong. Go back or contact support@domain"
        style={{ padding: Spacing.sp2 }}
      />
      <EmptyState
        heading="Unfortunately, there is no e-learning content yet."
        style={{ padding: Spacing.sp2 }}
      />
      <EmptyState
        heading="Something went wrong"
        content="Try again, choose a different pin terminal or choose another payment method"
        buttons={[
          { label: "Try again", onPress: () => console.log("Try again") },
          {
            label: "Other pin terminal",
            onPress: () => console.log("Other pin terminal"),
          },
          {
            label: "Other payment method",
            onPress: () => console.log("Other payment method"),
          },
        ]}
        style={{ padding: Spacing.sp2 }}
      />
      <EmptyState
        heading="Something went wrong"
        content="Try again or choose a different pin terminal"
        buttons={[
          { label: "Try again", onPress: () => console.log("Try again") },
          {
            label: "Other pin terminal",
            onPress: () => console.log("Other pin terminal"),
          },
        ]}
        style={{ padding: Spacing.sp2 }}
      >
        <Notification
          content="Still having the same problem?"
          containerStyle={{ marginTop: Spacing.sp5 }}
        >
          <TextButton
            label="Select a different payment method"
            onPress={() => console.log("Select a different payment method")}
          />
        </Notification>
      </EmptyState>
    </ScrollView>
  );
};

export default EmptyStates;