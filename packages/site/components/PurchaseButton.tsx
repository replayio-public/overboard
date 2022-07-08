import { AnimatePresence, motion } from "framer-motion";

export function PurchaseButton({ hasError }: { hasError?: boolean }) {
  return (
    <motion.button
      disabled={hasError}
      whileTap={{ scale: hasError ? undefined : 0.99 }}
      animate={{
        backgroundColor: hasError ? "var(--background-error)" : "var(--background)",
        color: hasError ? "var(--foreground-error)" : "var(--foreground)",
      }}
      style={
        {
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // width: 'var(--space-6)',
          // gap: 'var(--space-1)',
          // borderRadius: 'var(--radii-tertiary)',
          // position: 'relative',
          // overflow: 'hidden',
          // cursor: hasError ? 'not-allowed' : 'pointer',
        }
      }
    >
      <motion.span
        animate={{
          y: hasError ? -24 : 0,
          opacity: hasError ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        Add to cart
      </motion.span>

      <AnimatePresence>
        {hasError && (
          <motion.span
            style={{ position: "absolute" }}
            initial={{ y: 24, scale: 1.05, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.99, opacity: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
          >
            Error
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
