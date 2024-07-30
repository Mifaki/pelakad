import { Form, type FormInstance, Radio, type RadioChangeEvent } from 'antd';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';
import NewFamilyCardSection from './section/NewFamilyCardSection';
import { useState } from 'react';
import ChangeHeadFamilySection from './section/ChangeHeadFamilySection';
import SplitFamilySection from './section/SplitFamilyCardSection';
import MovingInSection from './section/MovingInSection';

type NewCardReason =
  | 'new_family_card'
  | 'change_head_of_family'
  | 'split_family_card'
  | 'moving_in';

const NewFamilyCardForm = ({ form }: { form: FormInstance<any> }) => {
  const [newCardReason, setNewCardReason] =
    useState<NewCardReason>('new_family_card');

  const onRadioChange = (e: RadioChangeEvent) => {
    const value = e.target.value as NewCardReason;
    setNewCardReason(value);
    form.setFieldsValue({ new_card_reason: value });
  };

  const renderSection = () => {
    switch (newCardReason) {
      case 'new_family_card':
        return <NewFamilyCardSection form={form} />;
      case 'change_head_of_family':
        return <ChangeHeadFamilySection form={form} />;
      case 'split_family_card':
        return <SplitFamilySection form={form} />;
      case 'moving_in':
        return <MovingInSection form={form} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Form.Item
        name="new_card_reason"
        label={<CusttomInputLabel>Alasan Pembuatan KK Baru</CusttomInputLabel>}
        rules={[
          {
            required: true,
            message: 'Pilih salah satu alasan pengajuan!',
          },
        ]}
        initialValue={'new_family_card'}
      >
        <Radio.Group
          name="new_card_reason"
          onChange={onRadioChange}
          value={newCardReason}
        >
          <Radio value="new_family_card">Membentuk Kartu Keluarga</Radio>
          <Radio value="change_head_of_family">
            Penggantian Kepala Keluarga
          </Radio>
          <Radio value="split_family_card">Pisah Kartu Keluarga</Radio>
          <Radio value="moving_in">Pindah Datang</Radio>
        </Radio.Group>
      </Form.Item>

      {renderSection()}
    </>
  );
};

export default NewFamilyCardForm;
