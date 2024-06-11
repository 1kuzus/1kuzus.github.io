offset += 6;
	if (attr) {
		attr->type = R_BIN_JAVA_ATTR_TYPE_BOOTSTRAP_METHODS_ATTR;
		if (offset + 8 > sz)  {
			free (attr);
			return NULL;
		}
		attr->info.bootstrap_methods_attr.num_bootstrap_methods = R_BIN_JAVA_USHORT (buffer, offset);
		offset += 2;
		attr->info.bootstrap_methods_attr.bootstrap_methods = r_list_newf (r_bin_java_bootstrap_method_free);