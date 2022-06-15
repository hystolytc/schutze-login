interface Props {
  id?: string
  type?: 'text' | 'password'
  name?: string
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: React.FC<Props> = ({
  id,
  type='text',
  name,
  placeholder,
  value,
  onChange
}) => (
  <input
    className='px-4 py-3 border border-txtTertiary text-body rounded mb-4'
    id={id}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange} />
)
