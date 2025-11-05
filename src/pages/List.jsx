import { useSelector, useDispatch } from 'react-redux'
import { addItem, editItem, deleteItem } from '../features/items/itemSlice'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
})

export default function List() {
  const items = useSelector((state) => state.items)
  const dispatch = useDispatch()
  const [editingItem, setEditingItem] = useState(null)

  const handleSubmit = (values, { resetForm }) => {
    if (editingItem) {
      dispatch(editItem({ id: editingItem.id, values }))
      setEditingItem(null)
    } else {
      dispatch(addItem(values))
    }
    resetForm()
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Items</h2>
      <Formik
        initialValues={{ name: editingItem?.name || '', description: editingItem?.description || '' }}
        enableReinitialize
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="mb-6 flex gap-2">
            <div>
              <Field name="name" placeholder="Name" className="border p-2 rounded w-40" />
              {errors.name && touched.name && <div className="text-red-500 text-sm">{errors.name}</div>}
            </div>
            <div>
              <Field name="description" placeholder="Description" className="border p-2 rounded w-60" />
              {errors.description && touched.description && <div className="text-red-500 text-sm">{errors.description}</div>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              {editingItem ? 'Update' : 'Add'}
            </button>
            {editingItem && (
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            )}
          </Form>
        )}
      </Formik>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => setEditingItem(item)}
                className="bg-yellow-400 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
