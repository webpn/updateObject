# updateObject
Update an object properties, without breaking references.

## Usage
```
updateObject(target, source)
```

The algorithm modifies the `target` object properties in place.

- `target`: the existing object to update

- `source`: the object which properties has to be copied in the `target` object

## Example

```
var main_data = {
	a: {
		title: "A"
	},
	b: {
		title: "B"
	}
};

var main_data_a = main_data.a;
var main_data_b = main_data.b;

var new_data = {
	a: {
		title: "Aa"
	},
	b: {
		title: "Bb"
	}	
};

updateObject(main_data, new_data);

main_data_a // { title: "Aa"}
main_data_b // { title: "Bb"}

```
