import { DropdownProps } from "@/constants/dropType";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
  findNodeHandle,
} from "react-native";

const COLOR = {
  selected: "#000000",
  unselected: "#B0B0B0",
};

export default function Dropdown<T>({
  options,
  value,
  defaultValue,
  onChange,
  open,
  onOpenChange,
  placeholder = "선택해주세요",
  disabled = false,
}: DropdownProps<T>) {
  const triggerRef = useRef<View>(null);

  /** dropdown position */
  const [position, setPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  /* open 상태 */
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (disabled) return;
      onOpenChange?.(next);
      if (open === undefined) {
        setInternalOpen(next);
      }
    },
    [disabled, onOpenChange, open]
  );

  /* value 상태 */
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue
  );
  const selectedValue = value ?? internalValue;

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === selectedValue),
    [options, selectedValue]
  );

  const handleSelect = (val: T) => {
    onChange?.(val);
    if (value === undefined) {
      setInternalValue(val);
    }
    setOpen(false);
  };

  /** 🔥 trigger 위치 측정 */
  const openDropdown = () => {
    const node = findNodeHandle(triggerRef.current);
    if (!node) return;

    UIManager.measureInWindow(node, (x, y, width, height) => {
      setPosition({
        left: x,
        top: y + height + 4, // 바로 아래 + gap
        width,
      });
      setOpen(true);
    });
  };

  return (
    <>
      {/* Trigger */}
      <Pressable
        ref={triggerRef}
        style={styles.trigger}
        disabled={disabled}
        onPress={openDropdown}
      >
        <Text
          style={[
            styles.triggerText,
            {
              color: selectedOption ? COLOR.selected : COLOR.unselected,
            },
          ]}
        >
          {selectedOption?.label ?? placeholder}
        </Text>
      </Pressable>

      {/* Dropdown Modal */}
      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        {/* Overlay */}
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setOpen(false)}
        />

        {position && (
          <View
            style={[
              styles.dropdown,
              {
                top: position.top,
                left: position.left,
                width: position.width,
              },
            ]}
          >
            {options.map((opt) => {
              const isSelected = opt.value === selectedValue;
              return (
                <Pressable
                  key={String(opt.value)}
                  style={styles.option}
                  onPress={() => handleSelect(opt.value)}
                >
                  <Text
                    style={{
                      color: isSelected ? COLOR.selected : COLOR.unselected,
                    }}
                  >
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        )}
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    width: "100%",
    paddingVertical: 13.5,
    paddingHorizontal: 16,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },

  triggerText: {
    fontSize: 14,
  },

  dropdown: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 8,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },

  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
