import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {VoucherProps} from './Voucher.types';
import {IVoucher} from '../../../types';
import {styles} from './Voucher.styled';
import {colors} from '../../../constants';

const Voucher: FC<VoucherProps> = ({data, onSelect, style, voucherStyle}) => {
  const [selected, setSelected] = useState<IVoucher>();

  console.log(selected);

  const handleSelected = useCallback(
    (item: IVoucher) => {
      if (onSelect) {
        onSelect(item);
      }
      setSelected(item);
    },
    [onSelect],
  );

  return (
    <View style={[styles.container, style]}>
      {data.map(voucher => (
        <TouchableOpacity
          key={voucher._id}
          onPress={() => {
            handleSelected(voucher);
          }}
          style={[styles.voucher, voucherStyle]}>
          <View style={styles.row}>
            <View style={styles.radioBtn}>
              {selected?._id === voucher._id && (
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 12,
                    backgroundColor: colors.BLACK,
                  }}
                />
              )}
            </View>
            <Text style={styles.voucherText}>{voucher.typeDiscount}</Text>
          </View>
          {voucher.discount && (
            <Text style={styles.voucherText}>{voucher.discount * 100}%</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Voucher;
