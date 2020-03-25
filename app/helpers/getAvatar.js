import faker from 'faker';

export default function getAvatar() {
	const icons = ['em-face_vomiting', 'em-face_with_cowboy_hat', 'em-expressionless', 'em-female-farmer', 'em-face_with_monocle', 'em-female-firefighter'];

	return faker.random.arrayElement(icons);
}
