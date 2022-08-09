import { addArrayItem, modifyArrayItem, removeArrayItem } from "../../store/cvStore";

const FormSection = ({
    title,
    isList = false,
    listValues = undefined,
    listName = undefined,
    isComplex = false,
    type = 'text',
    placeholder = undefined,
    onInput = undefined,
    value = undefined
}) => {
    return (
        <div class="bg-slate-300 p-4 pt-2 rounded-lg flex flex-col gap-1">
            <p class="text-gray-700">{title}</p>
            {(isList && listName && listValues.length) ? (
                <div className="flex flex-col gap-4">
                    {listValues.map((listItem, index) => (
                        <div class="flex flex-col gap-1">
                            <div className="flex justify-between gap-1">
                                {!isComplex && (
                                    <input
                                        type={type}
                                        class="block w-24 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                        placeholder="Icono"
                                        onInput={(e) => modifyArrayItem(listName, index, { ...listItem, icon: e.target.value })}
                                        value={listItem.icon}
                                    />
                                )}

                                <input
                                    type={type}
                                    class="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    placeholder={`${placeholder || title} ${index + 1}`}
                                    onInput={(e) => modifyArrayItem(listName, index, { ...listItem, name: e.target.value })}
                                    value={listItem.name}
                                />

                                <button class="px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => removeArrayItem(listName, index)} disabled={listValues.length === 1}>🗑</button>
                            </div>
                            {isComplex && (
                                <div class="flex flex-col gap-1">
                                    <textarea
                                        class="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                        placeholder={`${placeholder || title} ${index + 1}`}
                                        onInput={(e) => modifyArrayItem(listName, index, { ...listItem, description: e.target.value })}
                                        value={listItem.description}
                                    />
                                    <input
                                        type={type}
                                        class="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                        placeholder="Desde"
                                        onInput={(e) => modifyArrayItem(listName, index, { ...listItem, date: { ...listItem.date, from: e.target.value } })}
                                        value={listItem.date?.from}
                                    />
                                    <input
                                        type={type}
                                        class="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                        placeholder="Hasta"
                                        onInput={(e) => modifyArrayItem(listName, index, { ...listItem, date: { ...listItem.date, to: e.target.value } })}
                                        value={listItem.date?.to}
                                    />
                                    <input
                                        type={type}
                                        class="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                        placeholder="Lugar"
                                        onInput={(e) => modifyArrayItem(listName, index, { ...listItem, place: e.target.value })}
                                        value={listItem.place}
                                    />
                                </div>
                            )}
                        </div>
                    ))}

                    {/* {isComplex && ( */}
                    <button
                        class="w-full mt-2 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900"
                        onClick={() => addArrayItem(listName, {
                            name: `${title} ${listValues.length + 1}`,
                            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aut illum laborum unde fuga. Minus cupiditate earum eum odit.',
                            date: { from: '2001', to: '2005' },
                            place: `Lugar ${listValues.length + 1}`
                        })}
                    >
                        Añadir
                    </button>
                    {/* )} */}
                </div>
            ) : (
                <>
                    {type === 'textarea' && (
                        <textarea
                            class="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            placeholder={placeholder || title}
                            onInput={onInput}
                            value={value}
                        />
                    )}

                    {type === 'image' && (
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Clic para seleccionar</span> o arrastra un archivo</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" accept=".gif,.jpg,.jpeg,.png" onChange={onInput} />
                        </label>
                    )}

                    {type === 'text' && (
                        <input
                            type={type}
                            class="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            placeholder={placeholder || title}
                            onInput={onInput}
                            value={value}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default FormSection;
