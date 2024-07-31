#### new CDocBuilderValue

Class used by **ONLYOFFICE Document Builder** for getting the results of called JS commands. It represents a wrapper for a JS object.

The **CDocBuilderValue** class can be created from the primitive data types:

```
CDocBuilderValue(const bool& value);
CDocBuilderValue(const int& value);
CDocBuilderValue(const unsigned int& value);
CDocBuilderValue(const double& value);
CDocBuilderValue(const char* value);
CDocBuilderValue(const wchar_t* value);
```

## Methods

| Name                                                            | Description                                                |
| --------------------------------------------------------------- | ---------------------------------------------------------- |
| [Call](../CDocBuilderValue/Call/index.md)                       | Calls the specified Document Builder method.               |
| [Clear](../CDocBuilderValue/Clear/index.md)                     | Clears the object.                                         |
| [CreateNull](../CDocBuilderValue/CreateNull/index.md)           | Creates a null value.                                      |
| [CreateUndefined](../CDocBuilderValue/CreateUndefined/index.md) | Creates an undefined value.                                |
| [Get](../CDocBuilderValue/Get/index.md)                         | Returns an array value by its index.                       |
| [GetLength](../CDocBuilderValue/GetLength/index.md)             | Returns the length if this object is an array/typed array. |
| [GetProperty](../CDocBuilderValue/GetProperty/index.md)         | Returns a property of this object.                         |
| [IsArray](../CDocBuilderValue/IsArray/index.md)                 | Returns true if this object is an array.                   |
| [IsBool](../CDocBuilderValue/IsBool/index.md)                   | Returns true if this object is a boolean value.            |
| [IsDouble](../CDocBuilderValue/IsDouble/index.md)               | Returns true if this object is a double value.             |
| [IsEmpty](../CDocBuilderValue/IsEmpty/index.md)                 | Returns true if this object is empty.                      |
| [IsFunction](../CDocBuilderValue/IsFunction/index.md)           | Returns true if this object is a function.                 |
| [IsInt](../CDocBuilderValue/IsInt/index.md)                     | Returns true if this object is an integer.                 |
| [IsNull](../CDocBuilderValue/IsNull/index.md)                   | Returns true if this object is null.                       |
| [IsObject](../CDocBuilderValue/IsObject/index.md)               | Returns true if this object is an object.                  |
| [IsString](../CDocBuilderValue/IsString/index.md)               | Returns true if this object is a string.                   |
| [IsTypedArray](../CDocBuilderValue/IsTypedArray/index.md)       | Returns true if this object is a typed array.              |
| [IsUndefined](../CDocBuilderValue/IsUndefined/index.md)         | Returns true if this object is undefined.                  |
| [Set](../CDocBuilderValue/Set/index.md)                         | Sets an array value by its index.                          |
| [SetProperty](../CDocBuilderValue/SetProperty/index.md)         | Sets a property to this object.                            |
| [ToBool](../CDocBuilderValue/ToBool/index.md)                   | Converts this object to a boolean value.                   |
| [ToDouble](../CDocBuilderValue/ToDouble/index.md)               | Converts this object to a double value.                    |
| [ToInt](../CDocBuilderValue/ToInt/index.md)                     | Converts this object to an integer.                        |
| [ToString](../CDocBuilderValue/ToString/index.md)               | Converts this object to a string.                          |
